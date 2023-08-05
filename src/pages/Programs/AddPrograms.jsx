import React, { useState } from 'react';
import { baseUrl } from '../../baseurl/BaseUrl';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddPrograms = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        banner: 'https://udvash.com/media/Images/UDVASH/program/1/MAP22723.png',
        title: '',
        description: '',
        features: '',
        price: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const featuresArray = formData.features.split('\n').filter(feature => feature.trim() !== '');
        const newProgram = { ...formData, features: featuresArray };
        console.log(newProgram);

        fetch(`${baseUrl}/program`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newProgram)
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
                    navigate('/dashboard/programs');
                }
            })
    };

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    return (
        <div className='container content-wrapper'>
            <div className='content-header'>
                <div><h1 className="my-3 text-indigo">নতুন প্রোগ্রাম যোগ করুনঃ</h1></div>
                <form onSubmit={handleSubmit}>
                    <div className='row'>
                        <div className='col-md-8'>
                            <div className='form-group'>
                                <label htmlFor='banner'>ব্যানার</label>
                                <input type='file' className='bg-white border form-control-file p-1 rounded' id='banner' />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-8'>
                            <div className='form-group'>
                                <label htmlFor='title'>টাইটেল</label>
                                <input type='text' placeholder='টাইটেল' className='form-control' id='title' onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className='col-md-8'>
                            <div className='form-group'>
                                <label htmlFor='description'>বিস্তারিত</label>
                                <textarea placeholder='বিস্তারিত' type='text' rows='6' className='form-control' id='description' onChange={handleInputChange} />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-8'>
                            <div className='form-group'>
                                <label htmlFor='features'>ফিচারসমুহ (one per line)</label>
                                <textarea placeholder='ফিচারসমুহ ----- (↵ দিয়ে লিস্ট তৈরি করুন) ' className='form-control' id='features' rows='8' onChange={handleInputChange} />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-8'>
                            <div className='form-group'>
                                <label htmlFor='price'>ফি</label>
                                <input type='text' placeholder='ফি' className='form-control' id='price' onChange={handleInputChange} />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-8'>
                            <button className='btn fw-bold px-5 text-white' style={{ backgroundColor: '#160295' }} type='submit'>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPrograms;
