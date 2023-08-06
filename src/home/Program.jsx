import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './home.css'
import { baseUrl } from '../baseurl/BaseUrl';
import Loader from '../utilities/Loader';
const Program = () => {
    const [programs, setPrograms] = useState([])
    const [isLoadingData, setIsLoadingData] = useState(true)

    useEffect(() => {
        fetch(`${baseUrl}/programs`)
            .then(res => res.json())
            .then(data => {
                setPrograms(data)
                setIsLoadingData(false)
            })
    }, [])

    if (isLoadingData) {
        return <Loader />
    }


    return (

        <div className='my-3 w-100 mx-auto container mt-5 py-4'>
            <h1 className='fw-medium text-center text-success'>প্রোগ্রামসমূহ</h1>
            <div className="row d-flex mx-2">
                {
                    programs.map(program =>
                        <div className="col-lg-4 col-md-6 col-sm-6" style={{ display: 'flex' }} key={program._id}>
                            <div className="card shadow">
                                <div className="bg-cyan position-relative">
                                    <h6 className='position-absolute price-card'>

                                        ৳ <br /> <span className='fs-5'>{program.price}</span> <br /> <span>মাত্র</span>
                                    </h6>
                                    <img src={program.banner} alt="image" className='img-fluid' style={{ borderRadius: '0 98px 0px 0px', background: 'red', backgroundColor: 'red' }} />

                                </div>

                                <div className="card-body">
                                    <h3>
                                        <Link to={`/programs/${program._id}`} className='fs-3 text-center text-decoration-none' >{program.title}</Link>
                                    </h3>
                                    <ul>
                                        {
                                            program.features.map((feature, index) => (
                                                <li key={index}>{feature}</li>
                                            ))

                                        }
                                    </ul>
                                </div>
                                <div className=" mb-3 text-center ">
                                    <Link to={`/programs/${program._id}`} className='bg-success-subtle border border-3 border-success btn fw-bold'>বিস্তারিত</Link>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>

        </div>

    );
};

export default Program;