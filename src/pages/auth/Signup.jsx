import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import { baseUrl } from '../../baseurl/BaseUrl';
import Swal from 'sweetalert2';

const Signup = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { createUser, updateUserProfile, user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    student_name: '',
    father_name: '',
    password: '',
    organization_name: '',
    email: '',
    phone: '',
    role: 'student'
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('')
    createUser(formData.email, formData.password)
      .then(result => {
        const loggedUser = result.user;
        updateUserProfile(formData.name, formData.photoURL)
          .then(() => {
            const saveUser = formData;
            fetch(`${baseUrl}/users`, {
              method: 'POST',
              headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("access-token")}`,
              },
              body: JSON.stringify(saveUser)
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
                  });
                  navigate('/');
                }
              })
              .catch(error => {
                setError("An error occurred during user registration.");
                console.error("Error creating user:", error);
              });
          })
          .catch(error => {
            setError("An error occurred during user profile update.");
            console.error("Error updating user profile:", error);
          });
      })

  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {
        !user ? <div className='container mt-5 pt-4 col-md-6 col-sm-12'>
          <h1 className='fs-2 text-center'>রেজিস্ট্রেশন করোঃ</h1>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label className='fw-medium' htmlFor='student_name'>
                তোমার নাম:<span className='text-danger'> *</span>
              </label>
              <input
                required
                type='text'
                className='form-control'
                id='student_name'
                name='student_name'
                placeholder='তোমার নাম'
                value={formData.student_name}
                onChange={handleInputChange}
              />
            </div>

            <div className='form-group'>
              <label className='fw-medium' htmlFor='father_name'>
                তোমার বাবার নাম:<span className='text-danger'> *</span>
              </label>
              <input
                required
                type='text'
                className='form-control'
                id='father_name'
                name='father_name'
                placeholder='বাবার নাম'
                value={formData.father_name}
                onChange={handleInputChange}
              />
            </div>
            <div className='form-group'>
              <label className='fw-medium' htmlFor='father_name'>
                ফোন নাম্বার<span className='text-danger'> *</span>
              </label>
              <input
                required
                type='number'
                className='form-control'
                id='phone'
                name='phone'
                placeholder='ফোন নাম্বার'
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>

            <div className='form-group'>
              <label className='fw-medium' htmlFor='organization_name'>
                প্রতিষ্ঠানের নাম:<span className='text-danger'> *</span>
              </label>
              <input
                required
                type='text'
                className='form-control'
                id='organization_name'
                name='organization_name'
                placeholder='প্রতিষ্ঠানের নাম'
                value={formData.organization_name}
                onChange={handleInputChange}
              />
            </div>

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
                onChange={(event) => {
                  const { name, value } = event.target;
                  const lowercaseValue = value.toLowerCase();
                  handleInputChange({
                    target: {
                      name,
                      value: lowercaseValue,
                    },
                  });
                }}
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
            <span className="text-danger text-nowrap"> {error}</span>
            <div className='text-center'>
              <button
                type='submit'
                className='border-0 btn fw-medium mb-3 px-5 py-2 rounded-0 rounded-2 text-white'
                style={{ backgroundColor: '#08118E' }}>
                সাবমিট
              </button>
            </div>
          </form>

          <div className='mb-4 text-end'>
            <span> একাউন্ট আছে?</span>
            <Link to={'/signin'} className='text-center text-decoration-none'>
              তাহলে লগিন কর
            </Link>
          </div>
        </div> : (navigate("/", { replace: true }))
      }
    </>
  );
};

export default Signup;
