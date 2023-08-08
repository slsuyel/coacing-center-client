import React, { useState } from 'react';
import { baseUrl } from '../../baseurl/BaseUrl';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddPrograms = () => {
    const navigate = useNavigate();
    const [programImage, setProgramImage] = useState(null);
    const [formData, setFormData] = useState({
        banner: '',
        title: '',
        description: '',
        features: '',
        price: ''
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!programImage) {
            console.log('programImage 404');
            return;
        }

        // Code for uploading image to ImgBB
        const formDataImage = new FormData();
        formDataImage.append('image', programImage);
        formDataImage.append('key', '51b055a0b25f5e3bfd4bac7b96599647');

        const imgbbResponse = await fetch('https://api.imgbb.com/1/upload', {
            method: 'POST',
            body: formDataImage,
        });
        const imgbbData = await imgbbResponse.json();
        console.log(imgbbData);

        // Update the banner property in formData with the image URL
        const newFormData = { ...formData, banner: imgbbData.data.url };

        // Form data for the program
        const featuresArray = newFormData.features.split('\n').filter(feature => feature.trim() !== '');
        const newProgram = { ...newFormData, features: featuresArray };

        // Backend API call to save the program
        try {
            const backendResponse = await fetch(`${baseUrl}/program`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("access-token")}`,
                },
                body: JSON.stringify(newProgram)
            });
            const responseData = await backendResponse.json();

            if (responseData.insertedId) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Program created successfully.',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/dashboard/programs');
            }
        } catch (error) {
            console.error('Error saving program:', error);
            // Handle error, show error message or log it
        }
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
                                <input type='file' accept="image/*" onChange={(e) => setProgramImage(e.target.files[0])} required className='bg-white border form-control-file p-1 rounded' id='banner' />
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
                                <input type='number' placeholder='ফি' className='form-control' id='price' onChange={handleInputChange} />
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
