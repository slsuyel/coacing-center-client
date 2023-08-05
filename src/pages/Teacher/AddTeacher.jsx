import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { baseUrl } from '../../baseurl/BaseUrl';
import {  useNavigate } from 'react-router-dom';

const AddTeacher = () => {
    const navigate = useNavigate();
    const [teacherData, setTeacherData] = useState({
        teacherName: '',
        university: '',
        department: '',
        teachingDepartment: '',
        phone: '',
        email: '',
        address: ''
    });

    const handleInputChange = event => {
        const { id, value } = event.target;
        setTeacherData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = event => {
        event.preventDefault();
        // console.log('Teacher Data:', teacherData);

        fetch(`${baseUrl}/teacher`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(teacherData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'User created successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate('/dashboard/teachers');
                }
            })
    };




    return (
        <div className='content-wrapper'>

            <Form onSubmit={handleSubmit} className='content-header mx-4'>
                <Form.Group className='mb-3' controlId="teacherName">
                    <Form.Label>নাম :</Form.Label>
                    <Form.Control type="text" onChange={handleInputChange} value={teacherData.teacherName} placeholder="শিক্ষকের নাম" />
                </Form.Group>

                <Form.Group className='mb-3' controlId="university">
                    <Form.Label>বিশ্ববিদ্যালয় :</Form.Label>
                    <Form.Control type="text" onChange={handleInputChange} value={teacherData.university} placeholder="বিশ্ববিদ্যালয়ের নাম" />
                </Form.Group>

                <Form.Group className='mb-3' controlId="department">
                    <Form.Label>বিভাগ :</Form.Label>
                    <Form.Control type="text" onChange={handleInputChange} value={teacherData.department} placeholder="বিশ্ববিদ্যালয়ের বিভাগ" />
                </Form.Group>

                <Form.Group className='mb-3' controlId="teachingDepartment">
                    <Form.Label>যে বিভাগে পড়াবেন :</Form.Label>
                    <Form.Control type="text" onChange={handleInputChange} value={teacherData.teachingDepartment} placeholder="পড়াবেন যে বিভাগ" />
                </Form.Group>

                <Form.Group className='mb-3' controlId="phone">
                    <Form.Label>ফোন :</Form.Label>
                    <Form.Control type="tel" onChange={handleInputChange} value={teacherData.phone} placeholder="যোগাযোগের ফোন নাম্বার" />
                </Form.Group>

                <Form.Group className='mb-3' controlId="email">
                    <Form.Label>ইমেইল :</Form.Label>
                    <Form.Control type="email" onChange={handleInputChange} value={teacherData.email} placeholder="ইমেইল ঠিকানা" />
                </Form.Group>

                <Form.Group className='mb-3' controlId="address">
                    <Form.Label>ঠিকানা :</Form.Label>
                    <Form.Control as="textarea" onChange={handleInputChange} value={teacherData.address} placeholder="ঠিকানা" rows={3} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    তথ্য যোগ করুন
                </Button>
            </Form>
        </div>
    );
};

export default AddTeacher;
