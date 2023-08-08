import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from 'sweetalert2';
import Loader from "../../utilities/Loader";

export default function Signin() {
  const { login, loading } = useContext(AuthContext)
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("")
  const from = location.state?.from?.pathname || "/";

  // if (loading) {
  //   return <Loader />
  // }

  const handleSubmit = async (event) => {
    setError('')
    setIsSubmitting(true)
    event.preventDefault();
    login(email, password)
      .then(result => {
        // console.log(result.user);
        Swal.fire(
          'Wow!',
          'you have successfully logged in!',
          'success'
        );
        setIsSubmitting(false);
        navigate(from, { replace: true });
      })
    //   .catch(error => setError(error.message))
    // setIsSubmitting(false)
  };
  return (
    <>
      <div className="hold-transition login-page">
        <div className="login-box">
          <div className="login-logo">
            <h3>লগিন করো</h3>
          </div>
          <div className="card">
            <div className="card-body login-card-body">
              {/* <p className="login-box-msg">Login in to start your session</p> */}
              <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                  </div>

                  <div className="">
                    <span className="text-danger text-nowrap"> {error}</span>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'লগিন হচ্ছে...' : 'লগিন'}
                    </button>
                  </div>
                </div>
              </form>
              <div className='mb-4 text-end'>
                <span> একাউন্ট নেই?</span>
                <Link to={'/student/signup'} className='text-center text-decoration-none'>
                  একাউন্ট তৈরি করো
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
