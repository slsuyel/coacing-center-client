import React from 'react';
import { Link } from 'react-router-dom';
import useBlogs from '../hooks/useBlogs';

const Ticker = () => {
    const [allBlogs, refetch, isLoading] = useBlogs();
    if (isLoading) {
        return <> 'Loading' </>
    }

    return (
        <div className="mt-5 container-fluid pt-4">
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

                            {
                                allBlogs.map(blog => <Link to='/blog' className='text-decoration-none'> {blog?.title} 🕮</Link>)
                            }
                        </marquee>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Ticker;