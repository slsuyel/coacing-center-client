import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Modal, ModalHeader, ModalBody } from 'reactstrap';
import Ticker from '../../utilities/Ticker';
import useBlogs from '../../hooks/useBlogs';
import Loader from '../../utilities/Loader';
import { CardImg } from 'react-bootstrap';

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
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <Container data-aos="fade-up"
            data-aos-anchor-placement="top-bottom" fluid className='mt-5'>
            <Ticker />
            <Row>
                <Col md={3}>
                    <img src="https://i.ibb.co/RNZvMsH/Untitled-design.png" alt="" className='img-fluid my-3 text-center w-100' />

                </Col>
                <Col md={9} className="main-content mt-3">
                    <Container>
                        <Row>
                            {allBlogs.map((blog) => (
                                <Col key={blog._id} md={4} className="mb-4 col-sm-12">
                                    <Card style={{ width: '300px', height: '460px', margin: 'auto' }}>
                                        <CardBody>
                                            <CardTitle className='border-bottom  mb-2 pb-1 text-danger w-100'>{blog.title}</CardTitle>
                                            <img src={blog.banner ? blog.banner : 'https://images.yourstory.com/cs/wordpress/2017/02/52-Blog.jpg?w=1152&fm=auto&ar=2:1&mode=crop&crop=faces'} alt="" className='card-img img-fluid my-2' style={{ height: '112px' }} />

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

                    <div>
                        <img src={selectedBlog && selectedBlog.banner ? selectedBlog.banner : 'https://images.yourstory.com/cs/wordpress/2017/02/52-Blog.jpg?w=1152&fm=auto&ar=2:1&mode=crop&crop=faces'} alt="" className='card-img img-fluid my-2' />
                    </div>


                    {selectedBlog && <div dangerouslySetInnerHTML={{ __html: selectedBlog.content }} />}
                </ModalBody>
            </Modal>
        </Container>
    );
};

export default BlogPage;
