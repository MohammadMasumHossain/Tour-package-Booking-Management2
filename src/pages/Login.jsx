import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import SocialLogin from './Shared/SocialLogin';

const Login = () => {
    const {login}=use(AuthContext);
    
    const handleLogin=e=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);


        //login in user
        login(email,password)
        .then(res=>{
            console.log(res.user)
        })
        .catch(error=>{
            console.log(error)
        })
    }
     return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-2xl text-center'>Login Your Account</h2>
             <form onSubmit={handleLogin} className="card-body">
              <fieldset className="fieldset">
                {/* email */}
               <label className="label">Email</label>
               <input type="email" name ="email" className="input" placeholder="Email" />

               {/* password */}
               <label className="label">Password</label>
               <input type="password" name= "password" className="input" placeholder="Password" />
               <div><a className="link link-hover">Forgot password?</a></div>
               
               <button type="submit" className="btn btn-neutral mt-4">Login</button>

               
               <p className='text-center font-semibold pt-5'>Don't have an Account? <Link className="text-red-500" to="/register">Register</Link></p>
              </fieldset>
            </form>
           
                <div className='flex justify-center'>
                    <SocialLogin></SocialLogin>
                </div>
            
       </div>
        </div>
    );
};

export default Login;