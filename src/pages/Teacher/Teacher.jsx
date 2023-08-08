import { useEffect } from 'react';
import useUser from '../../hooks/useUser';
import { Link } from 'react-router-dom';
import useTeacher from '../../hooks/useTeacher';
import Loader from '../../utilities/Loader';
import { baseUrl } from '../../baseurl/BaseUrl';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const Teacher = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    const [teachers, refetch, isLoading] = useTeacher()
    // console.log(teachers);

    const { userResponse, userLoading } = useUser();

    if (isLoading) {
        return <Loader />
    }
    const handleTeacherDelete = async (id) => {
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
                await fetch(`${baseUrl}/teachers/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("access-token")}`,
                    },
                });
                toast.success('Teacher deleted successfully!', {
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
        <div data-aos="fade-up"
            data-aos-anchor-placement="top-bottom" className='my-5 pt-3' style={{ backgroundColor: "#D8D2FF", minHeight: '100vh' }}>
            <h4 className='mb-2 my-2 text-center text-custom'>মেন্টর পরিচিতিঃ</h4>
            <div className='d-flex flex-wrap gap-4'>
                {
                    teachers?.map(teacher => <div key={teacher._id} style={{ lineHeight: '10px' }} className='text-center mx-auto card p-5'>
                        <img src="https://www.shareicon.net/data/512x512/2016/10/11/841490_glasses_512x512.png" alt="" width={'100px'} className="border border-2 border-primary mx-auto mb-1 rounded-circle" />
                        <div className='text-center'>
                            <h5 className='text-indigo'>{teacher?.teacherName}</h5>
                            <h6>{teacher.university}</h6>
                            <p>বিভাগঃ {teacher.department}</p>
                        </div>
                        {
                            userResponse?.role == 'admin' ? <>
                                <div>
                                    <p>পড়াবেনঃ {teacher.teachingDepartment}</p>
                                    <p>ফোন : {teacher.phone}</p>
                                    <p>ইমেইল :  {teacher.email}</p>
                                    <p>ঠিকানা :  {teacher.address}</p>
                                </div>
                                <div className="d-flex flex-wrap gap-2 justify-content-center mb-3 text-center w-100">

                                    <Link to={`/teachers/${teacher._id}`} className='bg-blue border border-3 border-info btn fw-bold'>আপডেট</Link>

                                    <button onClick={() => {
                                        handleTeacherDelete(
                                            teacher._id)
                                    }} className='bg-danger border border-3 border-dark-subtle btn fw-bold'>ডিলেট</button>
                                </div>
                            </> : ''
                        }
                    </div>
                    )

                }



            </div>
        </div>
    );
};

export default Teacher;