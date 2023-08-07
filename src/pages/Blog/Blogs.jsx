import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import useBlogs from '../../hooks/useBlogs';
import Loader from '../../utilities/Loader';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { baseUrl } from '../../baseurl/BaseUrl';
const Blogs = () => {
    const [allBlogs, refetch, isLoading] = useBlogs()
    const [isSubmitting, setIsSubmitting] = useState(false);
    if (isLoading) {
        return <Loader />
    }


    const handleBlogDelete = async (id) => {
        setIsSubmitting(true)
        try {
            const result = await Swal.fire({
                title: 'Are you sure?',
                text: 'You are about to delete the student. This action cannot be undone!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'Cancel',
            }); setIsSubmitting(false)
            if (result.isConfirmed) {
                await fetch(`${baseUrl}/blog/${id}`, {
                    method: 'DELETE',
                });
                toast.success('Blog DELETED successfully!', { position: 'top-right', autoClose: 3000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined });
                refetch()
            }
        } catch (error) {
            setIsSubmitting(false)
            console.error('Error deleting student:', error);
        }
    };

    return (
        <div className='content-wrapper'>
            <div className='content-header'>
                <Link to='/dashboard/blog/add' className='btn fw-medium ms-3 mt-3  rounded-1 text-white' style={{ backgroundColor: '#160295' }}><i className="fa-solid fa-file-circle-plus"></i>  যোগ করুনঃ </Link>
                <div className='my-2'>
                    <Table striped responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Date</th>

                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allBlogs.map((blog, index) => <tr key={blog._id}>
                                    <td>{index + 1}</td>
                                    <td>{blog?.title}</td>
                                    <td>{blog?.author}</td>

                                    <td>
                                        {new Date(blog.date).toLocaleString('bn-BD', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                            hour: 'numeric',
                                            minute: 'numeric',
                                            hour12: true
                                        })}
                                    </td>
                                    <td>
                                        <button onClick={() => { handleBlogDelete(blog._id) }} className='btn btn-danger'
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? 'Please wait...' : 'Delete'}
                                        </button>
                                    </td>
                                </tr>)

                            }

                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default Blogs;