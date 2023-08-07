import React from 'react';
import image1 from '../../src/assets/img/online-courses.webp'

const Features = () => {
    return (
        <div className='w-100 mx-auto bg-white py-4 container-fluid'>
            <h1 className='fw-medium m2-4 text-center text-success'>আমাদের বৈশিষ্ট্যসমূহ</h1>

            <div className='align-items-center row justify-content-between mx-4'>
                <div className='col-md-6 col-sm-12'>
                    <p>
                        মেডিকেল ভর্তি পরীক্ষা নতুন পদ্ধতিতে (প্রত্যেক পরীক্ষার্থীর জন্য ইউনিক প্রশ্নসেট) অনুষ্ঠিত হয় । যেখানে ৩/8 টি Master Set থেকে সফট্ওয়্যারের মাধ্যমে Bar Code এবং QR Code ব্যবহার করে প্রত্যেক পরীক্ষার্থীর জন্য তৈরি করা হয় সমমান সম্পন্ন ইউনিক প্রশ্নসেট। তোমরা জেনে আনন্দিত হবে যে, বাংলাদেশে একমাত্র উন্মেষ-ই মেডিকেল ভর্তি পরীক্ষার অনুরূপ ইউনিক এক্সাম সিস্টেমে তাদের সকল পরীক্ষা নিয়ে থাকে । যে কারণে ২০২২-২৩ শিক্ষাবর্ষের মেডিকেল ভর্তি পরীক্ষায় উন্মেষিয়ানদের সাফল্যের হারও ঈর্ষণীয়। তাই মেডিকেল ভর্তি পরীক্ষায় সফল হতে এবং নিজের প্রস্তুতির সঠিক অবস্থান জানতে "উন্মেষ ইউনিক এক্সাম সিস্টেম" এর কোনো বিকল্প নেই।
                    </p>
                    <div className='row'>
                        <div className='col-3'></div>
                        <div className='col-md-9 col-sm-12'> <ul className='list-unstyled'>
                            <li> <i className="border border-success fa-check fa-solid me-1 p-1  rounded-circle text-success m-1"></i> অফলাইন/অনলাইন প্রোগ্রাম  মানসম্মত স্টাডি ম্যাটেরিয়ালস </li>
                            <li> <i className="border border-success fa-check fa-solid me-1 p-1  rounded-circle text-success m-1"></i> মেধাবী ও অভিজ্ঞ শিক্ষক  মানসম্মত স্টাডি ম্যাটেরিয়ালস </li>
                            <li> <i className="border border-success fa-check fa-solid me-1 p-1  rounded-circle text-success m-1"></i> মানসম্মত স্টাডি ম্যাটেরিয়ালস বেস্ট স্টুডেন্ট পোর্টাল</li>
                            <li> <i className="border border-success fa-check fa-solid me-1 p-1  rounded-circle text-success m-1"></i>মানসম্মত স্টাডি ম্যাটেরিয়ালস   কনসেপ্ট বেইজড ক্লাস </li>
                            <li> <i className="border border-success fa-check fa-solid me-1 p-1  rounded-circle text-success m-1"></i> ইউনিক এক্সাম সিস্টেম </li>
                            <li> <i className="border border-success fa-check fa-solid me-1 p-1  rounded-circle text-success m-1"></i>মানসম্মত স্টাডি ম্যাটেরিয়ালস   Auto SMS রেজাল্ট </li>
                            <li> <i className="border border-success fa-check fa-solid me-1 p-1  rounded-circle text-success m-1"></i> এক্সাম এনালাইসিস রিপোর্ট  মানসম্মত স্টাডি ম্যাটেরিয়ালস </li>
                            <li> <i className="border border-success fa-check fa-solid me-1 p-1  rounded-circle text-success m-1"></i> মানসম্মত স্টাডি ম্যাটেরিয়ালস  বেস্ট স্টুডেন্ট পোর্টাল </li>
                        </ul></div>
                    </div>
                </div>


                <div className='text-center col-md-6 col-sm-12'>
                    <img src={image1} alt="" className='img-fluid' />
                </div>
            </div>
        </div>
    );
};

export default Features;