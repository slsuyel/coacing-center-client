
import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { baseUrl } from '../../baseurl/BaseUrl';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddBlog = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [programImage, setProgramImage] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'font': [] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['bold', 'italic', 'underline'],
            // ['link', 'image'],
            [{ 'color': [] }, { 'background': [] }], [{ 'align': [] }],
            ['clean']
        ],
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true)
        const formDataImage = new FormData();
        formDataImage.append('image', programImage);
        formDataImage.append('key', '51b055a0b25f5e3bfd4bac7b96599647');
        const imgbbResponse = await fetch('https://api.imgbb.com/1/upload', {
            method: 'POST',
            body: formDataImage,
        });
        const imgbbData = await imgbbResponse.json();
        const blogData = {
            banner: imgbbData.data.image.url,
            title,
            author,
            content,
            date: new Date()
        };
        console.log(blogData);
        fetch(`${baseUrl}/blogs`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(blogData)
        }).then(res => res.json()).then(data => {
            if (data.insertedId) {

                toast.success('Blog Added successfully!', { position: 'top-right', autoClose: 3000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined })
                setIsSubmitting(false)
                navigate('/dashboard/blog');
            }
        })

    };

    return (
        <div className='content-wrapper'>
            <div className='content-header'>

                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="title">Title:</Label>
                        <Input type="text" name="title" id="title" required value={title} onChange={(e) => setTitle(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="banner">Banner:</Label>
                        <Input accept="image/*" name="banner" id="banner" type='file' onChange={(e) => setProgramImage(e.target.files[0])} required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="author">Author:</Label>
                        <Input type="text" name="author" required id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
                    </FormGroup>
                    <FormGroup className='bg-white px-2'>
                        <Label for="content">Content:</Label>
                        <ReactQuill theme="snow"
                            style={{ height: '260px', paddingBottom: '61px' }}
                            value={content} onChange={setContent} modules={modules} />
                    </FormGroup>

                    <Button color="primary" className='' disabled={isSubmitting} type="submit">
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </Button>
                </Form>

            </div>
        </div>
    );
};

export default AddBlog;
