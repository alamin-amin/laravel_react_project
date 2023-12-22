
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

import Navbar from '../../../layouts/frontend/Navbar';
function Cart() {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);
    var totalCartPrice = 0;

    useEffect(() => {
        axios.get(`/api/cart`).then(res => {
            if (res.data.status === 200) {
                setCart(res.data.cart);
                setLoading(false)
            }
            else if (res.data.status === 401) {
                navigate('/');
                swal("Warning", res.data.message, "error");
            }
        });
    }, []);

    //........... Cart product qty update start........
    const handleDecrement = (cart_id) => {
        setCart(cart =>
            cart.map((item) =>
                cart_id === item.id ? { ...item, product_quantity: item.product_quantity - (item.product_quantity > 1 ? 1 : 0) } : item)
        );
        updateCartQty(cart_id, "dec");
    }
    const handleIncrement = (cart_id) => {
        setCart(cart =>
            cart.map((item) =>
                cart_id === item.id ? { ...item, product_quantity: item.product_quantity + (item.product_quantity < 11 ? 1 : 0) } : item)
        );
        updateCartQty(cart_id, "inc");
    }

    function updateCartQty(cart_id, scope) {
        axios.put(`/api/cart-updateQty/${cart_id}/${scope}`).then(res => {
            if (res.data.status === 200) {
                swal("Success", res.data.message, "success");
            }
        });
    }

    //........... Cart product qty update end........

    const deleteCartItem = (e, cart_id) => {
        e.preventDefault();
        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Removing";

        axios.delete(`api/delete-cart-product/${cart_id}`).then(res => {
            if (res.data.status === 200) {
                swal('Success', res.data.message, 'success');
                thisClicked.closest("tr").remove();
            }
            else if (res.data.status === 404) {
                swal('Error', res.data.message, 'error');
                thisClicked.innerText = "Remove";
            }
        });
    }

    var cart_html = '';
    if (cart.length > 0) {
        cart_html = <div>
            <div className='table table-responsive'>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th className='text-center'># SL.</th>
                            <th className='text-center'>Image</th>
                            <th className='text-center'>Product</th>
                            <th className='text-center'>Price</th>
                            <th className='text-center'>Quantity</th>
                            <th className='text-center'>Total Price</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, idx) => {
                            totalCartPrice += item.product.selling_price * item.product_quantity
                            return (
                                <tr key={idx}>
                                    <td width="5%"> {item.id}</td>
                                    <td width="11%" className='text-center'> <img src={`http://127.0.0.1:8000/${item.product.image}`} alt="" width='60px' height="50px" /></td>
                                    <td className='text-center'> {item.product.product_name}</td>
                                    <td className='text-center'> {item.product.selling_price}</td>

                                    <td width="20%">
                                        <div className='input-group'>
                                            <button type='button' onClick={() => handleDecrement(item.id)} className='input-group-text '>-</button>
                                            <div className='form-control text-center'> {item.product_quantity}</div>
                                            <button type='button' onClick={() => handleIncrement(item.id)} className='input-group-text'>+</button>
                                        </div>
                                    </td>
                                    <td width="15%" className='text-center'>{item.product.selling_price * item.product_quantity}</td>
                                    <td width="10%" className='text-center'>
                                        <button type='button' onClick={(e) => deleteCartItem(e, item.id)} className='input-group-text text-center btn btn-danger btn-sm'>Remove</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

            <div className='row'>
                <div className='col-md-8'> </div>
                <div className='col-md-4'>
                    <div className='card card-body mt-1'>
                        <h3>Sub total :
                            <span className='float-end'>BDT - {totalCartPrice}</span>
                        </h3>
                        <h3>Grand total :
                            <span className='float-end'> BDT - {totalCartPrice}</span>
                        </h3>
                        <hr />
                        <Link to="/checkout" className='btn btn-primary'> Checkout </Link>
                    </div>
                </div>

            </div>
        </div>
    }
    else {
        cart_html = <div>
            <div className='card card-body py-5 text-center shadow-sm'>
                <h3> Your Shaping Cart is Empty  !!!</h3>
            </div>
        </div>

    }

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
                            <div className='col-md-12'>
                                {cart_html}
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart