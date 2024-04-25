import React, { useContext, useEffect, useState } from 'react';
import loginImg from '../../src/assets/others/authentication2.png'
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../Providers/AuthProviders';
import Swal from 'sweetalert2';
import useAxiosPublic from '../hooks/useAxiosPublic';

const Login = () => {

    const [disable, setDisable] = useState(true);
    const { signIn, loginWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation;
    const axiosPublic = useAxiosPublic();

    const from = location.state?.from?.pathname || '/';

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                Swal.fire({
                    title: "Success",
                    text: "Your Login has been successfully.",
                    icon: "success"
                });
                navigate(from, { replace: true });
            })
            .then(error => {
                console.log(error);
            })

    }

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisable(false)
        }
        else {
            setDisable(true)
        }
    }

    const handleLoginWithGoogle = () => {
        loginWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);

                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }

                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        Swal.fire({
                            title: "Success",
                            text: "Your Google Login has been successfully.",
                            icon: "success"
                        });
                        navigate(location?.state ? location?.state : '/')

                    })
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>

            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row gap-16 mt-40">

                    <div className="text-center lg:text-left w-1/2">
                        <img className=' max-w-sm max-h-sm' src={loginImg} alt="" />
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-lg border rounded-lg p-5">
                        <div className="card-body mt-12">
                            <h1 className="text-4xl font-semibold text-center">Login now!</h1>

                            <form onSubmit={handleRegister}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="Type Here email" name='email' className="input input-bordered bg-white" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="Password" placeholder="Enter your password" name='password' className="input input-bordered bg-white" required />
                                </div>


                                <div className="form-control mt-5">
                                    <label className="label">
                                        <LoadCanvasTemplate />
                                    </label>
                                    <input onBlur={handleValidateCaptcha} type="text" placeholder="Type The Captcha Above" name='captcha' className="input input-bordered bg-white" required />

                                </div>

                                <div className="form-control mt-6">
                                    <input disabled={disable} className=" text-white btn btn-slide-left bg-[#393cdd]" type="submit" value="Login" />
                                </div>

                            </form>
                        </div>

                        <div className='text-center'>
                            <p>New here? <Link to={'/register'} className='font-bold'> Create a New Account</Link></p>
                            <h2 className='text-xl font-semibold mt-5'>Or sign in with</h2>
                            <div className='flex gap-5 justify-center items-center mb-11 mt-8'>

                                <a onClick={handleLoginWithGoogle} className="btn btn-slide-left"> <FaGoogle className='text-[#444444] text-2xl'></FaGoogle></a>

                                <a className="btn btn-slide-left"><FaFacebook className='text-[#444444] text-2xl'></FaFacebook></a>

                                <a className="btn btn-slide-left"><FaGithub className='text-[#444444] text-2xl'></FaGithub> </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;