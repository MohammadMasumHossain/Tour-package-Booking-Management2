import React, { useContext } from 'react';
import Lottie from 'lottie-react';
import { Link, useNavigate } from 'react-router';  // fixed import from 'react-router-dom'
import registerlottie from '../assets/lotties/registeranimation.json';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import SocialLogin from './Shared/SocialLogin';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate=useNavigate()

  const handleregister = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    // Password validation regex
    const passwordRegEx = /(?=.*[a-z])(?=.*[A-Z]).{6,}/;

    if (!passwordRegEx.test(password)) {
      toast.error(
        "Password must have one lowercase, one uppercase, and at least 6 characters!",
        {
          position: "bottom-right",
          autoClose: 3000,
          pauseOnHover: true,
          draggable: true,
        }
      );
      return;
    }

    // Create user and show success/error toast accordingly
    createUser(email, password, name, photo)
      .then(res => {
        toast.success("Successfully created your account!", {
          position: "bottom-right",
          autoClose: 3000,
          pauseOnHover: true,
          draggable: true,
        });
        console.log(res.user);
         navigate("/")
        form.reset();
      })
      .catch(error => {
        toast.error(`Error: ${error.message}`, {
          position: "bottom-right",
          autoClose: 3000,
          pauseOnHover: true,
          draggable: true,
        });
        console.error(error);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="hero-content gap-10 flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie style={{ width: '500px' }} animationData={registerlottie} loop={true} />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
          <h2 className="font-semibold text-2xl text-center">Register Your Account</h2>
          <form onSubmit={handleregister} className="card-body">
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Name</label>
              <input type="text" name="name" className="input" placeholder="Name" required />

              {/* Email */}
              <label className="label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" required />

              {/* Photo URL */}
              <label className="label">Photo Url</label>
              <input type="text" name="photo" className="input" placeholder="Photo URL" />

              {/* Password */}
              <label className="label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" required />

              <button type="submit" className="btn btn-neutral mt-4">Register</button>

              <p className="text-center font-semibold pt-5">
                Already have an Account?{' '}
                <Link className="text-red-500" to="/login">Login</Link>
              </p>
            </fieldset>
          </form>
          <div className="flex justify-center">
            <SocialLogin />
          </div>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Register;
