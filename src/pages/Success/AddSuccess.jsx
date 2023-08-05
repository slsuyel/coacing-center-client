import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { baseUrl } from '../../baseurl/BaseUrl';
import { useNavigate } from 'react-router-dom';

const AddSuccess = () => {
    const navigate = useNavigate();
    const [studentData, setStudentData] = useState({
        studentName: '',
        university: '',
        department: '',
        graduationYear: '',
        message: '',
    });

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setStudentData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted with data:', studentData);
        fetch(`${baseUrl}/success`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(studentData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Success story created successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate('/dashboard/success');
                }
            })
    };

    return (
        <div className='content-wrapper'>
            <Form onSubmit={handleSubmit} className='content-header mx-4'>
                <Form.Group className='mb-3' controlId="studentName">
                    <Form.Label>নাম :</Form.Label>
                    <Form.Control type="text" onChange={handleInputChange} value={studentData.studentName} placeholder=" নাম" />
                </Form.Group>

                <Form.Group className='mb-3' controlId="university">
                    <Form.Label>প্রতিষ্ঠানের :</Form.Label>
                    <Form.Control type="text" onChange={handleInputChange} value={studentData.university} placeholder="প্রতিষ্ঠানের নাম" />
                </Form.Group>

                <Form.Group className='mb-3' controlId="department">
                    <Form.Label>পজিশন :</Form.Label>
                    <Form.Control type="text" onChange={handleInputChange} value={studentData.department} placeholder="পজিশন" />
                </Form.Group>

                <Form.Group className='mb-3' controlId="graduationYear">
                    <Form.Label>সেশন :</Form.Label>
                    <Form.Control type="text" onChange={handleInputChange} value={studentData.graduationYear} placeholder="সেশন" />
                </Form.Group>

                <Form.Group className='mb-3' controlId="message">
                    <Form.Label>ম্যাসেজ :</Form.Label>
                    <Form.Control as="textarea" rows={4} onChange={handleInputChange} value={studentData.message} placeholder="ম্যাসেজ" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    যোগ করুন
                </Button>
            </Form>
        </div>
    );
};

export default AddSuccess;
