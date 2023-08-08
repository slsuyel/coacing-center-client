import { Navbar, Nav, } from 'react-bootstrap';
import useUser from '../hooks/useUser';
import { Link, NavLink } from 'react-router-dom';
import './components.css'
const Header = () => {
    const { userResponse, userLoading } = useUser();
    // console.log(userResponse);
    return (
        <Navbar collapseOnSelect expand="lg" fixed="top" className=' bg-white border-2 border-bottom fw-bold navbar navbar-expand-lg navbar-light py-2 shadow-sm px-3' variant="light">
            <Navbar.Toggle aria-controls="responsive-navbar-nav " />
            <Navbar.Collapse id="responsive-navbar-nav ">
                <Nav className="justify-content-evenly navbar-nav w-100">
                    <Link to='/' className="d-none d-sm-block">
                        <img src="https://schooloe.netlify.app/assets/logo-a0525ee4.jpg" alt="" width={'130px'} draggable={false} />
                    </Link>

                    <NavLink to="/" className="nav-link text-dark">হোম</NavLink>
                    <NavLink to="/programs" className="nav-link text-dark">কোর্স সমূহ</NavLink>
                    <NavLink to="/teachers" className="nav-link text-dark">শিক্ষকের তালিকা</NavLink>
                    <NavLink to="/contact" className="nav-link text-dark">যোগাযোগ</NavLink>
                    <NavLink to="/blog" className="nav-link text-dark">ব্লগ</NavLink>
                    <NavLink to="/about" className="nav-link text-dark">আমাদের সম্পর্কে</NavLink>

                    {/* Conditional rendering based on user role */}
                    {userResponse?.role === 'admin' ? (
                        <NavLink to="/dashboard" className="nav-link text-white rounded-1" style={{ backgroundColor: '#160295' }}>Dashboard</NavLink>
                    ) : userResponse?.role === 'student' ? (
                        <NavLink to="/profile" className="nav-link text-white rounded-1" style={{ backgroundColor: '#160295' }}>প্রোফাইল</NavLink>
                    ) : (
                        <NavLink to="/student/signup" className="nav-link text-white rounded-1" style={{ backgroundColor: '#160295' }}>জয়েন করো</NavLink>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
