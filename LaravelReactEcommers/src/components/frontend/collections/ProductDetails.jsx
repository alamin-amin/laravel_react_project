
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Navbar from '../../../layouts/frontend/Navbar';


const ProductDetails = () => {
    const { id } = useParams();
    const [detailsProduct, setDetailsProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    useEffect(() => {
        axios.get(`/api/product-details/${id}`).then(res => {
            if (res.data.status === 200) {
                setDetailsProduct(res.data.product);
            }
        });
    }, [id]);


    const incrementNumber = () => {
        if (quantity < 12) {
            setQuantity(prevNumber => prevNumber + 1);
        }
    };

    const decrementNumber = () => {
        if (quantity > 1) {
            setQuantity(prevNumber => prevNumber - 1);
        }
    };


    // Add to cart start
    const handleAddToCart = (e) => {
        e.preventDefault();
        const data = {
            product_id: detailsProduct.id,
            product_quantity: quantity,
        }
        axios.post(`/api/add-to-cart/`, data).then(res => {
            if (res.data.status === 201) {
                swal("Success", res.data.message, "success");
            } else if (res.data.status === 409) {
                swal("Warning", res.data.message, "warning");
            } else if (res.data.status === 401) {
                swal("Warning", res.data.message, "warning");
            } else if (res.data.status === 404) {
                swal("Warning", res.data.message, "warning");
            }
        });
    }

    return (
        <>
            <Navbar />
            <div>
                <div className='container mt-2'>
                    <div>
                        <h3> <i className="fa-solid fa-chart-simple"></i> Product Details</h3>
                    </div>
                </div>
                <div className='py-3'>
                    <div className="container">
                        <div className="row">
                            <div className='col-md-4 border-end'>
                                <img src={`http://127.0.0.1:8000/${detailsProduct.image}`} alt="" className='w-100' />
                            </div>
                            <div className='col-md-8'>
                                <h4>Product Name : {detailsProduct.product_name} </h4>
                                <h4> Brand : {detailsProduct.brand} </h4>
                                <h3> Product Price : {detailsProduct.selling_price} TK .</h3>
                                {/* <h3> Category : {detailsProduct.category.categoryName} </h3> */}
                                <div>
                                    <label htmlFor="" className='btn-sm btn-success px-4 mt-3'>In stoke</label>
                                    <div className='row'>
                                        <div className='col-md-3 mt-3'>
                                            <div className='input-group'>
                                                <button type='button' onClick={decrementNumber} className='input-group-text '>-</button>
                                                <div className='form-control text-center'> {quantity}</div>
                                                <button type='button' onClick={incrementNumber} className='input-group-text'>+</button>
                                            </div>
                                        </div>
                                        <div className='col-md-3 mt-3'>
                                            <button type='button' className='btn btn-primary w-100' onClick={handleAddToCart}> Add to Cart</button>
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
export default ProductDetails