import React from 'react'
import { Master } from '../Master'



const ProductDetails = () => {
    return (
        <>
            <Master>
                <div>
                    <div className='container mt-2'>
                        <div>
                            <h4 >Produtc Details</h4>
                        </div>
                    </div>
                    <div className='py-3'>
                        <div className="container">
                            <div className="row">
                                <div className='col-md-4 border-end'>
                                    <img src="" alt="" className='w-100' />
                                </div>
                                <div className='col-md-8'>
                                    <h4> product name</h4>
                                    <h4> product price</h4>
                                    <h4> product desctiption</h4>
                                    <div>
                                        <label htmlFor="" className='btn-sm btn-success px-4 mt-3'>In stoke</label>
                                        <div className='row'>
                                            <div className='col-md-3 mt-3'>
                                                <div className='input-group'>
                                                    <button type='button' className='input-group-text'>-</button>
                                                    <input type="text" className='form-control text-center' value="1" />
                                                    <button type='button' className='input-group-text'>+</button>
                                                </div>
                                            </div>
                                            <div className='col-md-3 mt-3'>
                                                <button type='button' className='btn btn-primary w-100'> Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </Master>
        </>

    )
}

export default ProductDetails