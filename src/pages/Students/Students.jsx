import { Table } from 'reactstrap';
import useAllStudent from '../../hooks/useAllStudent';
const Students = () => {
    const [allStudents, refetch, isLoading] = useAllStudent()
    console.log(allStudents);



    return (
        <div className='content-wrapper'>
            <div className='content-header'>
                <div className='ms-2 mt-2 row'>
                    {
                        allStudents.map((s, index) => <div key={index} className='col-md-4 card'>
                            <h3>Program: {s?.programName}</h3>
                            <div>
                                <div className='d-flex fs-5 justify-content-between mx-2 text-cyan'>
                                    <p className='mb-0'>  Student List</p>
                                    <p className='mb-0'>  Total :{s?.emails.length} </p>
                                </div>
                                <ul>
                                    {
                                        s?.emails.map(email => <li>{email}</li>)
                                    }

                                </ul>
                            </div>
                        </div>)}
                </div>
            </div>
        </div>
    );
};

export default Students;
