import React from 'react'
import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import Navbar from '../../../layouts/frontend/Navbar';
function Cart() {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`/api/cart`).then(res => {
            if (res.data.status === 200) {
                setCart(res.data.cart);
                setLoading(false)
            }
            else if(res.data.status === 401)
            {
                navigate('/');
                swal("Warning", res.data.message, "error");
            }
        });
    }, []);



    return (
        <div>
            <Navbar />
            <div>
                <div className='container mt-2'>
                    <div>
                        <h3 >Home / Cart</h3>
                    </div>
                </div>
                <div className='py-3'>
                    <div className="container">
                        <div className="row">
                            <div className='col-md12'>
                                <div className='table table-responsive'>
                                    <table className='table table-bordered'>
                                        <thead>
                                            <tr>
                                                <th>Image</th>
                                                <th>product</th>
                                                <th className='text-center'>Price</th>
                                                <th className='text-center'>Quantity</th>
                                                <th className='text-center'>Total Price</th>
                                                <th className='text-center'>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td> <img src="" alt="" width='50px' height="50px" /></td>
                                                <td> aple</td>
                                                <td> 600</td>
                                                <td width="15%">
                                                    <div className='input-group'>
                                                        <button type='button' className='input-group-text '>-</button>
                                                        <div className='form-control text-center'>2</div>
                                                        <button type='button' className='input-group-text'>+</button>
                                                    </div>
                                                </td>
                                                <td width="15%" className='text-center'>90000</td>
                                                <td width="15%" className='text-center'>
                                                    <button type='button' className='input-group-text '>Remove</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart