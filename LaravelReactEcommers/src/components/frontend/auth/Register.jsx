

import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {

    const [registerInput, setRegister] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleInput = (e) => {
        e.persist();
        setRegister({ ...registerInput, [e.target.name]: e.target.vale });
    }
    const registerSubmitFrom = (e) => {
        e.preventDefault();
        const data = {
           
            name: registerInput.name,
            email: registerInput.email,
            password: registerInput.password,
        }
       axios.post(`http://127.0.0.1:8000/api/register`, data).then(res => {

        });
    }

    return (
        <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                                    <div className="card-header"><h3 className="text-center font-weight-light my-4">Create Account</h3></div>
                                    <div className="card-body">
                                        <form onSubmit={registerSubmitFrom}>
                                            <div className="row mb-3">
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                        <input name='name' onChange={handleInput} value={registerInput.name} className="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" />
                                                        <label htmlFor="inputFirstName">First name</label>
                                                    </div>
                                                </div>
                                                {/* <div className="col-md-6">
                                                    <div className="form-floating">
                                                        <input name='lname' onChange={handleInput} value={registerInput.lname} className="form-control" id="inputLastName" type="text" placeholder="Enter your last name" />
                                                        <label htmlFor="inputLastName">Last name</label>
                                                    </div>
                                                </div> */}
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input name='email' onChange={handleInput} value={registerInput.email} className="form-control" id="inputEmail" type="email" placeholder="name@example.com" />
                                                <label htmlFor="inputEmail">Email address</label>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                        <input name='password' onChange={handleInput} value={registerInput.password} className="form-control" id="inputPassword" type="password" placeholder="Create Link password" />
                                                        <label htmlFor="inputPassword">Password</label>
                                                    </div>
                                                </div>
                                                {/* <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                        <input className="form-control" id="inputPasswordConfirm" type="password" placeholder="Confirm password" />
                                                        <label htmlFor="inputPasswordConfirm">Confirm Password</label>
                                                    </div>
                                                </div> */}
                                            </div>
                                            <div className="mt-4 mb-0">
                                                {/* <button type='submit' className="d-grid"><Link className="btn btn-primary btn-block" to="login.html">Create Account</Link></button> */}
                                                <button type='submit' className='btn btn-primary btn-block'>Create Account</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="card-footer text-center py-3">
                                        <div className="small"><Link to="/frontLayout">Have an account? Go to login</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Register