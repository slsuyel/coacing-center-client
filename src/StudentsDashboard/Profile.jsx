
import { useContext } from "react";
import Loader from "../utilities/Loader";
import { AuthContext } from './../Providers/AuthProviders';
import useUser from "../hooks/useUser";
import MyPrograms from "./MyPrograms";

const Profile = () => {
    const { logOut } = useContext(AuthContext)

    const { userResponse, userLoading } = useUser();
    const student = userResponse

    const handleLogOut = () => {
        logOut()
    }
    // console.log(student);
    return (
        <div className="container mt-5 pt-5">
            <div className="main-body">
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width={150} />
                                    <div className="mt-3">
                                        <h4>{student?.student_name}</h4>
                                        <p className="text-secondary mb-1">পদবি: {student?.role}</p>
                                        <p className="text-muted font-size-sm">ঠিকানা : Dhaka </p>
                                        <span >
                                            <span id="meet-link" className="">
                                                <a style={{ backgroundColor: '#160295' }} className="btn btn-primary mx-2 text-decoration-none" href='#'> ক্লাসে প্রবেশ</a>
                                            </span>
                                        </span>
                                        <button className="btn btn-outline-primary">Message</button>
                                        <div className="text-center my-2">
                                            <button onClick={handleLogOut} className='btn btn-danger'><i className="fa-solid fa-right-from-bracket"></i> Log Out</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="col-md-8">
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">নামঃ</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {student?.student_name}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">বাবার নামঃ</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {student?.father_name}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">ইমেইলঃ</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {student?.email}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">ফোনঃ</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {student?.phone}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">শিক্ষা প্রতিষ্ঠানঃ</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {student?.organization_name}
                                    </div>
                                </div>
                                <hr />


                                <div className="row">
                                    <div className="col-sm-12">
                                        <a className="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <h4 className="border-bottom my-3 pb-2 text-center text-purple">তোমার কোর্স সমূহঃ</h4>


                            <MyPrograms />
                        </div>


                    </div>
                </div></div></div>

    );
};

export default Profile;

{/* <nav aria-label="breadcrumb" className="main-breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="">User</a></li>
                        <li className="breadcrumb-item active" aria-current="page">User Profile</li>
                    </ol>
                </nav> */}
{/* /Breadcrumb */ }

