import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import usePrograms from '../hooks/usePrograms';
import Loader from '../utilities/Loader';

const ProgramDetails = () => {
    const { id } = useParams();
    console.log(id);
    const [programs, refetch, isLoading] = usePrograms();

    useEffect(() => {
        AOS.init();
    }, []);

    if (isLoading) {
        return <Loader />;
    }

    const program = programs.find(p => p._id === id);

    return (
        <div data-aos="zoom-in-down" className='mx-auto w-100' style={{ backgroundColor: '#d8d2ff' }}>
            <div className='row container mx-auto w-100 mt-5 pt-4'>
                <div className='col-md-6 col-sm-12'>
                    <h4 className='border-4 border-primary border-start fs-3 fw-bold mb-3 ps-2 text-custom'>{program.title}</h4>
                    <p> {program.description}
                    </p>
                    <p className='fs-3 mb-0 text-custom'>যা যা থাকছে কোর্সেঃ</p>
                    <ul>
                        {
                            program.features.map((feature, index) => <li key={index}>{feature}</li>)
                        }
                    </ul>
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
                <button className='btn mb-4 mx-auto text-white py-2' style={{ backgroundColor: '#160295', width: '120px' }}> Enroll করো</button>
            </div>
        </div>
    );
};

export default ProgramDetails;