import React, { useEffect } from 'react';
import { json, useParams } from 'react-router-dom';
import usePrograms from '../hooks/usePrograms';
import Loader from '../utilities/Loader';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { baseUrl } from '../baseurl/BaseUrl';

const ProgramDetails = () => {
    const { user, loading } = useContext(AuthContext)
    const { id } = useParams();
    // console.log(id);
    const [programs, refetch, isLoading] = usePrograms();

    useEffect(() => {
        AOS.init();
    }, []);

    if (loading && isLoading) {
        return <Loader />;
    }

    const program = programs.find(p => p._id === id);

    const data = { programId: program._id, programName: program.title, email: user.email, admissionDate: new Date() }
    const handleEnroll = () => {
        console.log(data);

        fetch(`${baseUrl}/orders`, {
            method: "POST",
            headers: { "content-type": "application/json", },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(data => {
            //  console.log(data) 
            window.location.replace(data.url)
        })
    }

    return (
        <div data-aos="zoom-in-down" className='mx-auto w-100' style={{ backgroundColor: '#d8d2ff' }}>
            <div className='row container mx-auto w-100 mt-5 pt-4'>
                <div className='col-md-6 col-sm-12'>
                    <h4 className='border-4 border-primary border-start fs-3 fw-bold mb-3 ps-2 text-custom'>{program.title}</h4>
                    <p> {program.description}
                    </p>
                    <div>
                        <div>
                            <p className='fs-3 mb-0 text-custom'>যা যা থাকছে কোর্সেঃ</p>
                            <ul>
                                {
                                    program.features.map((feature, index) => <li key={index}>{feature}</li>)
                                }
                            </ul>
                        </div>
                        <div>
                            <p className='fs-3 mb-0 text-custom' >কোর্স ফি মাত্র <span className="fw-bold mx-2 p-3 text-warning" style={{ borderRadius: '69% 31% 40% 60% / 30% 30% 70% 70%', background: '#160295', color: 'white' }}>{program.price}</span>
                                টাকা</p>

                        </div>
                    </div>
                </div>
                <div className='col-md-6 col-sm-12' style={{ borderLeft: "2px solid #160295" }}>
                    <h4 className='mb-2 my-2 text-center text-custom'>মেন্টর পরিচিতিঃ</h4>
                    <div className='d-flex flex-wrap gap-4'>
                        <div style={{ lineHeight: '10px' }} className='text-center mx-auto'>
                            <img src="https://yt3.googleusercontent.com/6rFf7GQqCrmO6CXKohNnd2qSvEy58bu3ifAorWLV6V-xh0SwDCoIRRxYYINZvzqs6w2xx_6N0e4=s900-c-k-c0x00ffffff-no-rj" alt="" width={'100px'} className="border border-2 border-primary mb-1 rounded-circle" />
                            <div className='text-center'>
                                <h5>আয়মান সাদিক</h5>
                                <h6> ঢাকা বিশ্ববিদ্যালয়</h6>
                                <p>আইন বিভাগ</p>
                            </div>
                        </div>
                        <div style={{ lineHeight: '10px' }} className='mx-auto text-center'>
                            <img src="https://yt3.googleusercontent.com/6rFf7GQqCrmO6CXKohNnd2qSvEy58bu3ifAorWLV6V-xh0SwDCoIRRxYYINZvzqs6w2xx_6N0e4=s900-c-k-c0x00ffffff-no-rj" alt="" width={'100px'} className="border border-2 border-primary mb-1 rounded-circle" />
                            <div className='text-center'>
                                <h5>আয়মান সাদিক</h5>
                                <h6> ঢাকা বিশ্ববিদ্যালয়</h6>
                                <p>আইন বিভাগ</p>
                            </div>
                        </div>
                        <div style={{ lineHeight: '10px' }} className='text-center mx-auto'>
                            <img src="https://yt3.googleusercontent.com/6rFf7GQqCrmO6CXKohNnd2qSvEy58bu3ifAorWLV6V-xh0SwDCoIRRxYYINZvzqs6w2xx_6N0e4=s900-c-k-c0x00ffffff-no-rj" alt="" width={'100px'} className="border border-2 border-primary mb-1 rounded-circle" />
                            <div className='text-center'>
                                <h5>আয়মান সাদিক</h5>
                                <h6> ঢাকা বিশ্ববিদ্যালয়</h6>
                                <p>আইন বিভাগ</p>
                            </div>
                        </div>
                        <div style={{ lineHeight: '10px' }} className='text-center mx-auto'>
                            <img src="https://yt3.googleusercontent.com/6rFf7GQqCrmO6CXKohNnd2qSvEy58bu3ifAorWLV6V-xh0SwDCoIRRxYYINZvzqs6w2xx_6N0e4=s900-c-k-c0x00ffffff-no-rj" alt="" width={'100px'} className="border border-2 border-primary mb-1 rounded-circle" />
                            <div className='text-center'>
                                <h5>আয়মান সাদিক</h5>
                                <h6> ঢাকা বিশ্ববিদ্যালয়</h6>
                                <p>আইন বিভাগ</p>
                            </div>
                        </div>

                    </div>
                </div>
                <button onClick={handleEnroll} className='btn mb-4 mx-auto text-white py-2' style={{ backgroundColor: '#160295', width: '120px' }}>Enroll করো</button>
            </div>
        </div>
    );
};

export default ProgramDetails;