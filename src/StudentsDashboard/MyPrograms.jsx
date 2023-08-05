import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { baseUrl } from '../baseurl/BaseUrl';

const MyPrograms = () => {
    const { user, loading } = useContext(AuthContext)
    const [myProgram, setMyProgram] = useState([])

    useEffect(() => {
        fetch(`${baseUrl}/myorders/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyProgram(data)
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, [user]);


    console.log(myProgram);
    return (
        <div className='row'>
            {
                myProgram.map((program) =>
                    <div key={program._id} className="col-lg-6 col-md-6 col-sm-12" style={{ display: 'flex' }}>
                        <div className="card shadow">
                            <div className="card-header p-0">
                                <h4 className='fs-4 mb-0 ms-2 py-1 text-cyan'><span className='fs-4 me-1 text-dark'>কোর্সের নামঃ</span> {program?.order?.programName}</h4>
                            </div>
                            <div className="card-body font-monospace lh-1">
                                <p>Email : {program?.order?.email}</p>
                                <p>Transaction Id : {program?.transactionId}</p>
                                <p>Admission Date : {new Date(program?.order?.admissionDate).toLocaleString('en-US', { timeZone: 'UTC' })}</p>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default MyPrograms;
