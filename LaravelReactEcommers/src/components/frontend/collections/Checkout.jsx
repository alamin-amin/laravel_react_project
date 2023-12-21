import React from 'react'
import Navbar from '../../../layouts/frontend/Navbar'


function Checkout() {
    return (
        <>
            <Navbar />
            <div>
                <div>
                    <div className='container mt-2'>
                        <div>
                            <h3 >Home / Checkout</h3>
                        </div>
                    </div>
                    <div className='py-3'>
                        <div className="container">
                            <div className="row">
                                <div className='col-md-7'>
                                    <div className='card'>
                                        <div className='card-header'>
                                            <h3 className='text-center'>  Order information</h3>
                                        </div>
                                        <div className='card-dody'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <div className='from-group mb-2'>
                                                        <label htmlFor="">First Name</label>
                                                        <input type="text" name='firstname' className='form-control' />
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className='from-group mb-2'>
                                                        <label htmlFor="">Last Name</label>
                                                        <input type="text" name='lastname' className='form-control' />
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className='from-group mb-2'>
                                                        <label htmlFor="">Phone Number</label>
                                                        <input type="text" name='phone' className='form-control' />
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className='from-group mb-2'>
                                                        <label htmlFor="">Email Address</label>
                                                        <input type="text" name='email' className='form-control' />
                                                    </div>
                                                </div>
                                                <div className='col-md-12'>
                                                    <div className='from-group mb-2'>
                                                        <label htmlFor="">Full Address</label>
                                                        <textarea rows="3" className='form-control'></textarea>
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className='from-group mb-2'>
                                                        <label htmlFor="">City</label>
                                                        <input type="text" name='city' className='form-control' />
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className='from-group mb-2'>
                                                        <label htmlFor=""> State</label>
                                                        <input type="text" name='state' className='form-control' />
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className='from-group mb-2'>
                                                        <label htmlFor=""> Zip Code</label>
                                                        <input type="text" name='zipcode' className='form-control' />
                                                    </div>
                                                </div>
                                                <div className='col-md-12'>
                                                    <div className='from-group text-end mb-2'>
                                                        <button type="button" className='btn btn-primary form-control'> Place Order </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Checkout