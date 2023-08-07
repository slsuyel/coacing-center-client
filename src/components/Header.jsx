import { Navbar, Nav, } from 'react-bootstrap';
import useUser from '../hooks/useUser';
const Header = () => {
    const { userResponse, userLoading } = useUser();
    // console.log(userResponse);
    return (
        <Navbar collapseOnSelect expand="lg" fixed="top" className=' bg-white border-2 border-bottom fw-bold navbar navbar-expand-lg navbar-light py-2 shadow-sm px-3' variant="light">
            <Navbar.Toggle aria-controls="responsive-navbar-nav " />
            <Navbar.Collapse id="responsive-navbar-nav ">
                <Nav className="justify-content-evenly navbar-nav w-100">
                    <Nav.Link className='text-dark' href="/">হোম</Nav.Link>

                    <Nav.Link className='text-dark' href="/programs">কোর্স সমূহ</Nav.Link>

                    <Nav.Link className='text-dark' href="/teachers">শিক্ষকের তালিকা</Nav.Link>

                    <Nav.Link className='text-dark' href="/contact">যোগাযোগ </Nav.Link>
                    <Nav.Link className='text-dark' href="/blog">ব্লগ</Nav.Link>
                    <Nav.Link className='text-dark' href="/about">আমাদের সম্পর্কে</Nav.Link>

                    {
                        userResponse?.role === 'admin' ?
                            <Nav.Link style={{ backgroundColor: '#160295' }} className='ms-3 nav-link px-3 rounded-2 text-white' href="/dashboard">Dashboard</Nav.Link>
                            : userResponse?.role === 'student' ?
                                <Nav.Link href="/profile" style={{ backgroundColor: '#160295' }} className='ms-3 nav-link px-3 rounded-2 text-white'>প্রোফাইল</Nav.Link>
                                :
                                <Nav.Link href="/student/signup" style={{ backgroundColor: '#160295' }} className='ms-3 nav-link px-3 rounded-2 text-white'>জয়েন করো</Nav.Link>
                    }








                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
