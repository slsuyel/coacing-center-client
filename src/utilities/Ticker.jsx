import React from 'react';
import { Link } from 'react-router-dom';

const Ticker = () => {
    return (
        <div className="mt-5 container pt-4">
            <div className="row">
                <div className="col-md-12">
                    <div
                        className="d-flex justify-content-between align-items-center breaking-news bg-white"
                        style={{ border: "1px solid rgb(22, 2, 149)" }}
                    >
                        <div
                            className="d-flex flex-row flex-grow-1 flex-fill justify-content-center  py-2 text-white px-1 news"
                            style={{ backgroundColor: "rgb(22, 2, 149)" }}
                        >
                            <span className="d-flex align-items-center">&nbsp;নোটিশ</span>
                        </div>
                        <marquee
                            className="news-scroll"
                            behavior="scroll"
                            direction="left"

                        >
                            <Link to='' className='text-decoration-none'>  মেডিকেল ভর্তি পরীক্ষা নতুন পদ্ধতিতে 🕮</Link>
                            <Link to='' className='text-decoration-none'>  মেডিকেল ভর্তি পরীক্ষা নতুন পদ্ধতিতে 🕮</Link>
                            <Link to='' className='text-decoration-none'>  মেডিকেল ভর্তি পরীক্ষা নতুন পদ্ধতিতে 🕮</Link>
                            <Link to='' className='text-decoration-none'>  মেডিকেল ভর্তি পরীক্ষা নতুন পদ্ধতিতে 🕮</Link>
                            <Link to='' className='text-decoration-none'>  মেডিকেল ভর্তি পরীক্ষা নতুন পদ্ধতিতে 🕮</Link>
                            <Link to='' className='text-decoration-none'>  মেডিকেল ভর্তি পরীক্ষা নতুন পদ্ধতিতে 🕮</Link>
                            <Link to='' className='text-decoration-none'>  মেডিকেল ভর্তি পরীক্ষা নতুন পদ্ধতিতে 🕮</Link>
                            <Link to='' className='text-decoration-none'>  মেডিকেল ভর্তি পরীক্ষা নতুন পদ্ধতিতে 🕮</Link>
                            <Link to='' className='text-decoration-none'>  মেডিকেল ভর্তি পরীক্ষা নতুন পদ্ধতিতে 🕮</Link>
                            <Link to='' className='text-decoration-none'>  মেডিকেল ভর্তি পরীক্ষা নতুন পদ্ধতিতে 🕮</Link>
                            <Link to='' className='text-decoration-none'>  মেডিকেল ভর্তি পরীক্ষা নতুন পদ্ধতিতে 🕮</Link>
                            <Link to='' className='text-decoration-none'>  মেডিকেল ভর্তি পরীক্ষা নতুন পদ্ধতিতে 🕮</Link>
                            <Link to='' className='text-decoration-none'>  মেডিকেল ভর্তি পরীক্ষা নতুন পদ্ধতিতে 🕮</Link>
                            <Link to='' className='text-decoration-none'>  মেডিকেল ভর্তি পরীক্ষা নতুন পদ্ধতিতে 🕮</Link>
                        </marquee>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Ticker;