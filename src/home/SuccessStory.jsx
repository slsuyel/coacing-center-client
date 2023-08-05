import React from 'react';
import UseSuccessStory from '../hooks/UseSuccessStory';
import Loader from '../utilities/Loader';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { baseUrl } from '../baseurl/BaseUrl';
import useUser from '../hooks/useUser';

const SuccessStory = () => {
    const [successStory, refetch, isLoading] = UseSuccessStory()
    // console.log(successStory);

    const { userResponse, userLoading } = useUser();

    if (isLoading) {
        return < Loader />
    }



    const handleSuccessDelete = async (id) => {
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
                await fetch(`${baseUrl}/success/${id}`, {
                    method: 'DELETE',
                });
                toast.success('Success story deleted successfully!', {
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
        <div className="row w-100 mx-auto">
            <h1 className='fw-medium mb-4 text-center text-success'>সফলদের গল্প</h1>

            {
                successStory.map(success => <div key={success._id} className="col-md-3">
                    <div
                        className="card text-center pt-2"
                        style={{
                            backgroundColor: "#f1f1f1",
                            boxShadow: "inset 0px 3px 6px #6d9197"
                        }}
                    >
                        <div className="card-header d-flex justify-content-center align-items-center border-0">
                            <img className='img-circle'
                                width={'100px'}
                                src="https://unmesh.com/media/Images/Unmesh/Testimonial/MAP221st.png"
                                alt={success.studentName}
                                style={{ border: "4px solid #6d9197" }}
                            />
                        </div>
                        <div className="card-body">
                            <h3>{success.studentName}</h3>
                            <h5>ভর্তি পরীক্ষা: {success.graduationYear}</h5>
                            <h6 className='fs-4 fw-bold' style={{ color: "#6d9197" }}>{success.university}{success.department}</h6>
                            <div className="quote" style={{ position: "relative" }}>
                                <span
                                    style={{
                                        backgroundColor: "#6d9197",
                                        borderBottom: "15px solid #f1f1f1"
                                    }}
                                />
                                <span
                                    style={{
                                        backgroundColor: "#6d9197",
                                        borderBottom: "15px solid #f1f1f1"
                                    }}
                                />
                            </div>
                            <p>
                                {success.message}
                            </p>
                            <hr style={{ backgroundColor: "#6d9197" }} />
                        </div>

                        {
                            userResponse?.role == 'admin' ? <button onClick={() => { handleSuccessDelete(success._id) }} className='bg-danger border border-3 border-dark-subtle btn fw-bold'>ডিলেট</button> : ''
                        }



                    </div>
                </div>)
            }


        </div>

    );
};

export default SuccessStory;

