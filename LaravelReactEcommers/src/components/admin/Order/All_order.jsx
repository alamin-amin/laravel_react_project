import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import MasterLayout from '../../../layouts/admin/MasterLayout'

function All_Order() {
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        document.title = "Orders";

        axios.get(`/api/admin-orders`).then(res => {
            if (res.data.status === 200) {
                setOrders(res.data.orders);
                setLoading(false);
            }
        });
    }, []);

    var displayOrders = '';
    if (loading) {
        return <h2 className='text-center pt-5'>Orders is comming</h2>
    } else {
        displayOrders = orders.map((items) => {
            return (
                <tr key={items.id}>
                    <td>{items.id}</td>
                    <td>{items.lastname}</td>
                    <td>{items.phone}</td>
                    <td>{items.tracking_no}</td>
                    <td>{items.payment_mode}</td>
                    <td>{items.status}</td>
                    <td>{items.status === 0 ? 'visible' : 'Hidden'}</td>
                    <td>
                        <Link to={'#'} className='btn btn-success btn-sm me-1'>View</Link>
                    </td>
                </tr>
            )
        });
    };


    return (
        <MasterLayout>
            <div>
                <div className="card mb-4">
                    <div className="p-3">
                        <div><h2>All  Orders
                            <Link to="/admin/addProduct" className='btn btn-primary float-end'>Add Product</Link>
                        </h2>
                        </div>
                    </div>

                    <div className="card-body">
                        <div className='table-responsive'>
                            <table className='table table-striped' id="datatablesSimple">
                                <thead>
                                    <tr>
                                        <th># ID</th>
                                        <th>Customers</th>
                                        <th>Phone</th>
                                        <th>Traking No</th>
                                        <th>Payment</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {displayOrders}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </MasterLayout>
    )
}
export default All_Order