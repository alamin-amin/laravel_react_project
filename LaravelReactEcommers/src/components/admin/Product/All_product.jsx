import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import MasterLayout from '../../../layouts/admin/MasterLayout'
import axios from 'axios';

const AllProduct = () => {
    const [loading, setLoading] = useState(true);
    const [viewProduct, setProduct] = useState([]);

    useEffect(() => {
        document.title = "View Products";

        axios.get(`/api/all-product`).then(res => {
            if (res.data.status === 200) {
                setProduct(res.data.products);
                setLoading(false);
            }
        });
    }, []);



    const deleteProduct = (e, id) => {
        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Deleting";

        axios.delete(`api/delete-product/${id}`).then(res => {
            if (res.data.status === 200) {
                swal('Success', res.data.message, 'success');
                thisClicked.closest("tr").remove();

            }
            else if (res.data.status === 404) {
                swal('Success', res.data.message, 'success');
                thisClicked.innerText = "Delete";
            }
        });
        e.preventDefault();
    }

    var viewProductData = '';
    if (loading) {
        return <h2 className='text-center pt-5'>Products is comming</h2>
    } else {
        viewProductData = viewProduct.map((items) => {
            return (
                <tr key={items.id}>
                    <td>{items.id}</td>
                    <td>{items.product_name}</td>
                    <td><img src={`http://127.0.0.1:8000/${items.image}`} width="50px" alt={items.name} /></td>
                    <td>{items.category_id}</td>
                    <td>{items.selling_price}</td>
                    <td>{items.status}</td>
                    <td>
                        <Link to={`/admin/edit-product/${items.id}`} className='btn btn-success btn-sm me-1'>Edit</Link>
                        <button type='button' onClick={(e) => deleteProduct(e, items.id)} className='btn btn-danger btn-sm'>Delete</button>
                    </td>
                </tr>
            )
        });
    };

    return (
        <div>
            <MasterLayout>
                <div className="card mb-4">
                    <div className="p-3">
                        <div><h2>All Product
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
                                        <th>Name</th>
                                        <th>Image</th>
                                        <th>Category</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                        <th>Action</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {viewProductData}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </MasterLayout>
        </div>

    )
}

export default AllProduct