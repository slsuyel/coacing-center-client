import React from 'react';
import { useEffect, useContext } from 'react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const StudentSignin = () => {
  const navigate = useNavigate();
  const { login, user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log('Form data:', formData);
    login(formData.email, formData.password)
  };

  
  return (
    <>
      {
        !user ? <div data-aos="zoom-in-down" className=' col-md-6 col-sm-12 container mt-5 pt-4'>
          <h1 className='fs-2 text-center'>লগিন করোঃ</h1>
          <form onSubmit={handleSubmit}>

            <div className='form-group'>
              <label className='fw-medium' htmlFor='password'>
                ইমেইলঃ <span className='text-danger'> *</span>
              </label>

              <input
                required
                type='email'
                className='form-control'
                id='email'
                name='email'
                placeholder='ইমেইলঃ'
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className='form-group'>
              <label className='fw-medium' htmlFor='password'>
                পাসওয়ার্ড <span className='text-danger'> *</span>
              </label>
              <input
                required
                type='password'
                className='form-control'
                id='password'
                name='password'
                placeholder='পাসওয়ার্ড'
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>

            <div className='text-center'>
              <button
                type='submit'
                className='border-0 btn fw-medium mb-3 px-5 py-2 rounded-0 rounded-2 text-white'
                style={{ backgroundColor: '#08118E' }}>
                লগিন
              </button>
            </div>
          </form>
          <div className='mb-4 text-end'>
            <span> একাউন্ট নেই?</span>
            <Link to={'/student/signup'} className='text-center text-decoration-none'>
              তাহলে একাউন্ট তৈরী কর
            </Link>
          </div>
        </div> : (navigate("/profile", { replace: true }))
      }
    </>


  );
};

export default StudentSignin;