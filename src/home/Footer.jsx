import logo from '../../src/assets/img/logo.jpg'

const Footer = () => {

    return (
        <footer className="pt-5 bg-white ">
            <div className="container  px-4 px-md-3 ">
                <div className="row">
                    <div className="col-lg-3 mb-3">
                        <div className="list-unstyled small">
                            <img src={logo} width={'250px'} alt="Logo" />
                            <p className="mb-2">
                                A learning management system (LMS) is a software application for the administration, documentation, tracking, reporting, automation
                            </p>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 mb-3">
                        <h5>অন্যান্য লিঙ্কঃ</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a className='text-decoration-none' href="#">লগিন</a></li>
                            <li className="mb-2"><a className='text-decoration-none' href="#">রেজিস্ট্রেশন</a></li>
                            <li className="mb-2"><a className='text-decoration-none' href="#">ব্লগ</a></li>
                            <li className="mb-2"><a className='text-decoration-none' href="#">যোগাযোগ</a></li>

                        </ul>
                    </div>
                    <div className="col-6 col-lg-3 mb-4">
                        <h5>বিশ্ববিদ্যালয় লিঙ্কঃ</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a className='text-decoration-none' href="#">ঢাকা বিশ্ববিদ্যালয়</a></li>
                            <li className="mb-2"><a className='text-decoration-none' href="#">রাজশাহী বিশ্ববিদ্যালয়</a></li>
                            <li className="mb-2"><a className='text-decoration-none' href="#">চট্টগ্রাম বিশ্ববিদ্যালয়</a></li>
                            <li className="mb-2"><a className='text-decoration-none' href="#">গুচ্ছ বিশ্ববিদ্যালয়</a></li>
                        </ul>
                    </div>

                    <div className="card  col-lg-3 mb-3 pt-2">
                        <h5>সামাজিক যোগাযোগ মাধ্যম</h5>
                        <div className='d-flex gap-4'>
                            <a href="https://www.facebook.com">
                                <i className="fab fs-4 fa-facebook"></i>
                            </a>
                            <a href="https://www.twitter.com">
                                <i className="fab fs-4 fa-twitter"></i>
                            </a>
                            <a href="https://www.instagram.com">
                                <i className="fab fs-4 fa-instagram"></i>
                            </a>
                            <a href="https://www.whatsapp.com">
                                <i className="fab fs-4 fa-whatsapp"></i>
                            </a>
                        </div>
                        <div className='mt-4 text-end'>
                            <h6 className='mb-0 '>কারিগরি সহায়তায়:</h6>
                            <a className='fs-5 ms-3 text-dark text-decoration-none' target="_blank" href="https://www.linkedin.com/in/slsuyel">সুয়েল হক</a>
                        </div>

                    </div>
                </div>
            </div>
            <div className="position-relative">
                <a href="#top" className="gp-top" ><i className="fa-solid fa-circle-chevron-up"></i></a>
            </div>

            <div className="text-center px-4 py-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                "© {new Date().getFullYear()} School of excellence. All rights reserved."
            </div>
        </footer>
    );
};

export default Footer;