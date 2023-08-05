import { Table } from 'reactstrap';
const Students = () => {
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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.length > 0 ? (
                            students.map((student, index) => (
                                <tr key={student._id}>
                                    <td>{index + pageNo}</td>
                                    <td>{student.name}</td>
                                    <td>{student.phone}</td>
                                    <td>{student.email}</td>
                                    <td className='d-flex justify-content-around gap-2'>
                                        <Link className='btn btn-primary text-decoration-none' to={`/dashboard/student/show/${student._id}`}>Show</Link>
                                        <Link className='btn btn-info text-decoration-none' to={`/dashboard/student/edit/${student._id}`}>Edit</Link>
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

export default Students;
