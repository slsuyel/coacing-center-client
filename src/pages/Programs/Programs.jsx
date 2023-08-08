import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { baseUrl } from '../../baseurl/BaseUrl';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import usePrograms from '../../hooks/usePrograms';
import Loader from '../../utilities/Loader';
import program1 from '../../../src/assets/img/program1.jpg'

const Programs = () => {
    const [programs, refetch, isLoading] = usePrograms()
    const [isSubmitting, setIsSubmitting] = useState(false);
    if (isLoading) {
        return <Loader />
    }
    const handleProgramsDelete = async (id) => {
        setIsSubmitting(true)
        try {
            const result = await Swal.fire({
                title: 'Are you sure?',
                text: 'You are about to delete the Programs. This action cannot be undone!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'Cancel',
            });
            if (result.isConfirmed) {
                await fetch(`${baseUrl}/programs/${id}`, {
                    method: 'DELETE',
                });
                setIsSubmitting(false);
                toast.success('Programs deleted successfully!', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                refetch()
            }
        } catch (error) {
            console.error('Error deleting student:', error);
        }
    };

    return (
        <div className='content-wrapper'>
            <div className='content-header'>
                <div className='my-3 w-100 mx-auto'>
                    <h1 className='fw-medium text-center text-success'>প্রোগ্রামসমূহ</h1>
                    <div>
                        <Link to='/dashboard/programs/add' className='btn fw-medium mb-3 ms-3 rounded-1 text-white' style={{ backgroundColor: '#160295' }}><i className="fa-solid fa-file-circle-plus"></i> নতুন প্রোগ্রাম যোগ করুনঃ </Link>
                    </div>
                    <div className="row d-flex mx-2">

                        {
                            programs.map(program =>
                                <div className="col-lg-4 col-md-6 col-sm-6" style={{ display: 'flex' }} key={program?._id}>
                                    <div className="card shadow">
                                        <div className="bg-cyan position-relative">
                                            <h6 className='position-absolute price-card'>

                                                ৳ <br /> <span className='fs-5'>{program?.price}</span> <br /> <span>মাত্র</span>
                                            </h6>
                                            <img src={program.banner ? program.banner : program1} alt="image" width="100%" style={{ borderRadius: '0 98px 0px 0px', background: 'red', backgroundColor: 'red' }} />

                                        </div>

                                        <div className="card-body">
                                            <p>
                                                <Link to={`/programs/${program?._id}`} className='fs-3 text-center text-decoration-none' >{program?.title}</Link>
                                            </p>
                                            <ul>
                                                {
                                                    program.features.map((feature, index) => <li key={index}>{feature}</li>)
                                                }
                                            </ul>
                                        </div>
                                        <div className="d-flex flex-wrap gap-2 justify-content-center mb-3 text-center w-100">
                                            <Link to={`/programs/${program._id}`} className='bg-success-subtle border border-3 border-success btn fw-bold'>বিস্তারিত</Link>
                                            <Link to='/programs/1' className='bg-blue border border-3 border-info btn fw-bold'>আপডেট</Link>

                                            <button onClick={() => { handleProgramsDelete(program._id) }} className='bg-danger border border-3 border-dark-subtle btn fw-bold'>ডিলেট</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    </div>


                </div>
            </div>
        </div>
    );
};

export default Programs;