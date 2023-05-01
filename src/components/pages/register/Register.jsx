import React, { useContext, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const { register } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleRegister = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);
        register(email, password)
            .then(result => {
                console.log(result);
                navigate("/")
            })
            .catch(error => {
                console.log(error)
                const message = error.message.slice(10)
                Swal.fire(`${message}`)
            })
    }
    return (
        <div>
            <div className="card-body shadow-xl mx-auto lg:w-1/2 my-4">
                <form onSubmit={handleRegister}>
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="name" className="input input-bordered w-5/6" required name='name' />

                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <input type="text" placeholder="photo url" className="input input-bordered w-5/6" required name='photourl' />

                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered w-5/6" required name='email' />

                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="text" placeholder="password" className="input input-bordered w-5/6" required name='password' />
                    <br />
                    <input className="btn btn-warning mt-4  w-5/6" type='submit' name='submit' value="register" />
                    <div>
                        <p>Already have an account? <Link to="/login" className='text-blue-800'>Please login</Link> </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;