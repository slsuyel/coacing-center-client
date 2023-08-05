import { Table } from 'reactstrap';
import useAllUsers from '../../hooks/useAllUsers';
import Loader from '../../utilities/Loader';
import { baseUrl } from '../../baseurl/BaseUrl';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
const Users = () => {
    const [users, refetch, isLoading] = useAllUsers()

    if (isLoading) {
        return <Loader />
    }

    const handleStudentDelete = async (id) => {
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
            });
            if (result.isConfirmed) {
                await fetch(`${baseUrl}/users/${id}`, {
                    method: 'DELETE',
                });
                toast.success('Student deleted successfully!', {
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
                <Table striped responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 ? (
                            users.map((student, index) => (
                                <tr key={student._id}>
                                    <td>{index + 1}</td>
                                    <td>{student.student_name}</td>
                                    <td>{student.phone}</td>
                                    <td>{student.email}</td>
                                    <td>{student.role}</td>
                                    <td className=''>
                                        <button onClick={() => handleStudentDelete(student._id)} className='btn btn-danger'> Delete</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan='6'>
                                    <Loader />
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Users;
