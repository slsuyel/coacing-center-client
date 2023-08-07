import React, { useState } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Modal, ModalHeader, ModalBody } from 'reactstrap';
import Ticker from '../../utilities/Ticker';
import useBlogs from '../../hooks/useBlogs';
import Loader from '../../utilities/Loader';

const BlogPage = () => {
    const [allBlogs, refetch, isLoading] = useBlogs();
    const [modalOpen, setModalOpen] = useState(false); // State for modal visibility
    const [selectedBlog, setSelectedBlog] = useState(null); // State to hold the selected blog

    const toggleModal = (blog) => {
        setSelectedBlog(blog);
        setModalOpen(!modalOpen);
    };

    if (isLoading) {
        return <Loader />;
    }

    return (
        <Container fluid className='mt-5'>
            <Ticker />
            <Row>
                <Col md={3}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis et deserunt sit voluptate amet voluptates, culpa optio esse iure quam sequi enim alias voluptatem omnis ducimus excepturi dignissimos repellat iusto.
                </Col>
                <Col md={9} className="main-content mt-3">
                    <Container>
                        <Row>
                            {allBlogs.map((blog) => (
                                <Col key={blog._id} md={4}  className="mb-4 col-sm-12">
                                    <Card style={{ width: '300px', height: '400px' ,margin : 'auto'}}>
                                        <CardBody>
                                            <CardTitle className='border-bottom  mb-2 pb-1 text-danger w-100'>{blog.title}</CardTitle>

                                            <div className='font-italic lh-1 row text-secondary' style={{ fontSize: '13px' }}>

                                                <p className='col-6'>লিখেছেনঃ <span>{blog.author}</span></p>
                                                <p className='col-6'>তারিখঃ <span>{new Date(blog.date).toLocaleDateString('bn-BD', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}</span></p>
                                            </div>

                                            <CardText dangerouslySetInnerHTML={{ __html: blog.content.slice(0, 300) + '. . . . .' }} />
                                        </CardBody>
                                        <div className='mx-auto my-2'>
                                            <button className='bg-secondary btn' onClick={() => toggleModal(blog)}>বিস্তারিত</button>
                                        </div>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </Col>
            </Row>

            {/* Modal to display full card content */}
            <Modal isOpen={modalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>{selectedBlog && selectedBlog.title}</ModalHeader>
                <ModalBody>


                    <div className='font-italic lh-1 row text-secondary' style={{ fontSize: '18px' }}>
                        <p className='col-6'>লিখেছেনঃ <span>{selectedBlog && selectedBlog.author}</span></p>
                        <p className='col-6'>তারিখঃ <span>{selectedBlog && new Date(selectedBlog.date).toLocaleDateString('bn-BD', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}</span></p>
                    </div>

                    {selectedBlog && <div dangerouslySetInnerHTML={{ __html: selectedBlog.content }} />}
                </ModalBody>
            </Modal>
        </Container>
    );
};

export default BlogPage;
