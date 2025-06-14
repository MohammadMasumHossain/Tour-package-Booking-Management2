import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import { Link } from 'react-router';
import registerlottie from '../assets/lotties/registeranimation.json'
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import SocialLogin from './Shared/SocialLogin';

const Register = () => {

    const {createUser}=useContext(AuthContext)

    const handleregister =e=>{
        e.preventDefault();
        const form =e.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        const photo=form.photo.value;
       console.log(name,email,password,photo);
       //create user
           createUser(email,password,name,photo)
           .then(res=>{
            console.log(res.user)
           })
           .catch(error=>{
            console.log(error)
           })
    }
     return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className="hero-content gap-10 flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
     <Lottie style={{width:'500px'}} animationData={registerlottie} loop="{true}"></Lottie>
    
        </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-2xl text-center'>Register Your Account</h2>
             <form onSubmit={handleregister} className="card-body">
              <fieldset className="fieldset">
                 {/* name */}
                <label className="label">Name</label>
               <input type="text" name="name" className="input" placeholder="Name" />
                
                {/* email */}
               <label className="label">Email</label>
               <input type="email" name="email" className="input" placeholder="Email" />

                 {/* photo url */}
                 <label className="label">Photo Url</label>
               <input type="text" name="photo" className="input" placeholder="url" />


                  {/* password */}
               <label className="label">Password</label>
               <input type="password" name="password" className="input" placeholder="Password" />
              
               
               <button type="submit" className="btn btn-neutral mt-4">Register</button>
               
               <p className='text-center font-semibold pt-5'>Already have an Account? <Link className="text-red-500" to="/login">Login</Link></p>
              </fieldset>
            </form>
            <div className='flex justify-center'>
                <SocialLogin></SocialLogin>
            </div>
       </div>
       </div>
        </div>
    );
};

export default Register;