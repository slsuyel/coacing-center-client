import React, { useEffect } from 'react';

const ProgramDetails = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div data-aos="zoom-in-down" className='mx-auto w-100' style={{ backgroundColor: '#d8d2ff' }}>
            <div className='row container mx-auto w-100 mt-5 pt-4'>
                <div className='col-md-6 col-sm-12'>
                    <h4 className='border-4 border-primary border-start fs-3 fw-bold mb-3 ps-2 text-custom'>2nd Time মেডিকেল ভর্তি প্রস্তুতি</h4>
                    <p> যারা HSC 2023 বোর্ড পরীক্ষা পূর্বেই মেডিকেল 2nd Time প্রস্তুতির ধারাবাহিকতা নিশ্চিত করতে চাও, তাদের জন্য “2nd Time এক্সাম প্যাক”। আর যারা প্রথমে 2nd Time এক্সাম প্যাক এবং 1st টাইমারদের সাথে এক্সাম প্যাকে প্রস্তুতি নিতে চাও, তাদের জন্য “2nd Time এক্সাম প্যাক + 1st Time All Exam (3 Materials)”। এছাড়াও যারা 2nd Time এক্সাম প্যাকের সাথে 1st টাইমারদের সকল পরীক্ষা দিতে চাও আর প্রস্তুতি সহায়ক সকল বই পেতে চাও তাদের জন্য “2nd Time এক্সাম প্যাক + 1st Time All Exam (All Materials)”। আর যারা 2nd Time এক্সাম প্যাকের সাথে 1st টাইমারদের ফুল কোর্স করতে চাও, তাদের জন্য “2nd Time এক্সাম প্যাক + 1st Time ফুল কোর্স”।

                    </p>
                    <p className='fs-3 mb-0 text-custom'>যা যা থাকছে কোর্সেঃ</p>
                    <ul>
                        <li>মেধাবী ও অভিজ্ঞ শিক্ষক দ্বারা ক্লাস</li>
                        <li>ম্যারাথন লাইভ ক্লাস</li>
                        <li>প্রশ্নব্যাংক&nbsp;মাস্টার ক্লাস ও&nbsp;কুইজ</li>
                        <li>পর্যাপ্ত সংখ্যক স্ট্যান্ডার্ড এক্সাম</li>
                        <li>মানসম্মত সকল স্টাডি ম্যাটেরিয়ালস</li>
                        <li>সার্বক্ষণিক Q &amp; A সেবা</li>
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