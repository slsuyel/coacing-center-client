import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './home.css'
const Program = () => {

    return (
        <div className='my-5 pt-4 w-100 mx-auto'>
            <h1 className='fw-medium mb-4 text-center text-success'>প্রোগ্রামসমূহ</h1>

            <div className="row d-flex mx-2">

                <div className="col-lg-4 col-md-6 col-sm-6" style={{ display: 'flex' }}>
                    <div className="card shadow">
                        <div className="bg-cyan position-relative">
                            <h6 className='position-absolute price-card'>

                                ৳ <br /> <span className='fs-5'>2500</span> <br /> <span>মাত্র</span>
                            </h6>
                            <img src="https://udvash.com/media/Images/UDVASH/program/1/MAP22723.png" alt="image" width="100%" style={{ borderRadius: '0 98px 0px 0px', background: 'red', backgroundColor: 'red' }} />

                        </div>



                        <div className="card-body">
                            <h3>
                                <Link to='/programs/1' className='fs-3 text-center text-decoration-none' >মেডিকেল + ভার্সিটি Math কোর্স 2023 (গুচ্ছ প্রস্তুতি ফ্রি!)</Link>
                            </h3>
                            <ul>
                                <li>মেধাবী ও অভিজ্ঞ শিক্ষক দ্বারা ক্লাস</li>
                                <li>ম্যারাথন লাইভ ক্লাস</li>
                                <li>প্রশ্নব্যাংক&nbsp;মাস্টার ক্লাস ও&nbsp;কুইজ</li>
                                <li>পর্যাপ্ত সংখ্যক স্ট্যান্ডার্ড এক্সাম</li>
                                <li>মানসম্মত সকল স্টাডি ম্যাটেরিয়ালস</li>
                                <li>সার্বক্ষণিক Q &amp; A সেবা</li>
                            </ul>
                        </div>
                        <div className="mb-3 text-center">
                            <Link to='/programs/1' className='details-btn'>বিস্তারিত</Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6" style={{ display: 'flex' }}>
                    <div className="card shadow">
                        <div className="card-header p-0">
                            <img src="https://udvash.com/media/Images/UDVASH/program/1/MAP22723.png" alt="image" width={'100%'} />
                        </div>
                        <div className="card-body">
                            <h3>
                                <Link to='/programs/1' className='fs-3 text-center text-decoration-none' >মেডিকেল + ভার্সিটি Math কোর্স 2023 (গুচ্ছ প্রস্তুতি ফ্রি!)</Link>
                            </h3>
                            <ul>
                                <li>মেধাবী ও অভিজ্ঞ শিক্ষক দ্বারা ক্লাস</li>
                                <li>ম্যারাথন লাইভ ক্লাস</li>
                                <li>প্রশ্নব্যাংক&nbsp;মাস্টার ক্লাস ও&nbsp;কুইজ</li>
                                <li>পর্যাপ্ত সংখ্যক স্ট্যান্ডার্ড এক্সাম</li>
                                <li>মানসম্মত সকল স্টাডি ম্যাটেরিয়ালস</li>
                                <li>সার্বক্ষণিক Q &amp; A সেবা</li>
                            </ul>
                        </div>
                        <div className="card-footer text-center border-0 pb-3 d-flex justify-content-center align-items-center gap-3">
                            <button className='bg-success-subtle border border-3 border-success btn fw-bold'>বিস্তারিত</button>
                            <button className='bg-blue border border-3 border-info btn fw-bold'>ভর্তি হও</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6" style={{ display: 'flex' }}>
                    <div className="card shadow">
                        <div className="card-header p-0">
                            <img src="https://udvash.com/media/Images/UDVASH/program/1/MAP22723.png" alt="image" width={'100%'} />
                        </div>
                        <div className="card-body">
                            <h3>
                                <Link to='/programs/1' className='fs-3 text-center text-decoration-none' >মেডিকেল + ভার্সিটি Math কোর্স 2023 (গুচ্ছ প্রস্তুতি ফ্রি!)</Link>
                            </h3>
                            <ul>
                                <li>মেধাবী ও অভিজ্ঞ শিক্ষক দ্বারা ক্লাস</li>
                                <li>ম্যারাথন লাইভ ক্লাস</li>
                                <li>প্রশ্নব্যাংক&nbsp;মাস্টার ক্লাস ও&nbsp;কুইজ</li>
                                <li>পর্যাপ্ত সংখ্যক স্ট্যান্ডার্ড এক্সাম</li>
                                <li>মানসম্মত সকল স্টাডি ম্যাটেরিয়ালস</li>
                                <li>সার্বক্ষণিক Q &amp; A সেবা</li>
                            </ul>
                        </div>
                        <div className="card-footer text-center border-0 pb-3 d-flex justify-content-center align-items-center gap-3">
                            <button className='bg-success-subtle border border-3 border-success btn fw-bold'>বিস্তারিত</button>
                            <button className='bg-blue border border-3 border-info btn fw-bold'>ভর্তি হও</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Program;