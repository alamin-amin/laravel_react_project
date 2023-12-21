import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import Navbar from '../../../layouts/frontend/Navbar'


function Checkout() {

    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    var totalCartPrice = 0;

    useEffect(() => {
        axios.get(`/api/cart`).then(res => {
            if (res.data.status === 200) {
                setCart(res.data.cart);
            }
            else if (res.data.status === 401) {
                navigate('/');
                swal("Warning", res.data.message, "error");
            }
        });
    }, []);


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
                                                        <input type="number" name='phone' className='form-control' />
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <div className='from-group mb-2'>
                                                        <label htmlFor="">Email Address</label>
                                                        <input type="email" name='email' className='form-control' />
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
                                <div className='col-md-5'>
                                    <table className='table table-borderd'>
                                        <thead>
                                            <tr>
                                                <th> SL.</th>
                                                <th className='text-center'>Product</th>
                                                <th className='text-center'>Price</th>
                                                <th className='text-center'>Quantity</th>
                                                <th className='text-end'>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cart.map((item, idx) => {
                                                totalCartPrice += item.product.selling_price * item.product_quantity
                                                return (
                                                    <tr key={idx}>
                                                        <td width="9%"> {item.id}</td>
                                                        <td className='text-center'> {item.product.product_name}</td>
                                                        <td className='text-center'> {item.product.selling_price}</td>
                                                        <td width="5%" className='text-center'> {item.product_quantity}</td>
                                                        <td width="15%" className='text-end'>{item.product.selling_price * item.product_quantity} </td>
                                                    </tr>
                                                )
                                            })}
                                            <tr>
                                                <td colSpan="3" className='text-end fw-bold'>Grand total</td>
                                                <td colSpan="3" className='text-end fw-bold'>{totalCartPrice} TK .</td>
                                            </tr>
                                        </tbody>
                                    </table>
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