import React, { useContext } from "react";
import bar from "../assets/clock-time.gif"
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import useUser from "../hooks/useUser";


export default function Navbar() {
  const { userResponse, userLoading } = useUser();
  const navigate = useNavigate()
  const { logOut } = useContext(AuthContext)
  const handleLogOut = async () => {
    logOut()
    navigate('/signin')
  }

  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item mb-3">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button">
            <img src={bar} alt="" width={'50px'} />
          </a>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">

        <li className="nav-item dropdown">
          <span className="nav-link" data-toggle="dropdown" href="#">
            <i className="fas fa-user-circle fa-lg fs-3"></i>
          </span>
          <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right px-2">
            <span className="dropdown-item text-danger">Hello, {userResponse?.student_name}</span>
            <span className="dropdown-item">Admin</span>
            <Button onClick={handleLogOut} className="dropdown-item">
              <i className="fas fa-sign-out-alt mr-2"></i> Log out
            </Button>
          </div>
        </li>
      </ul>
    </nav>
  );
}

