
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import MasterLayout from '../../../layouts/admin/MasterLayout'


const All_Category = () => {
    const [loading, setLoading] = useState(true);
    const [categorylist, setCategorylist] = useState([]);

    useEffect(() => {
        axios.get(`/api/all-category`).then(res => {
            console.log(res.data.category)
            if (res.status === 200) {
                setCategorylist(res.data.category)
            }
            setLoading(false);
        });
    }, []);

    var viewCategory = '';
    if (loading) {
        return <h3>Loaging Category...</h3>
    } else {
        viewCategory =
            categorylist.map((items) => {
                return (
                    <tr key={items.id}>
                        <td>{items.id}</td>
                        <td>{items.categoryName}</td>
                        <td>{items.slug}</td>
                        <td>{items.status}</td>
                        <td>
                            <Link to={`edit-category/${items.id}`} className='btn btn-success btn-sm me-1'>Edit</Link>
                            <button to={`edit-category/${items.id}`} className='btn btn-success btn-sm'>Delete</button>
                        </td>
                    </tr>
                )
            });
    }

    return (
        <div>
            <MasterLayout>
                <div className="card mb-4">
                    <div className="p-3">
                        <div><h2>All Category
                            <Link to="/admin/addCategory" className='btn btn-primary float-end'>Add Category</Link>
                        </h2>
                        </div>
                    </div>

                    <div className="card-body">
                        <table className='table table-striped' id="datatablesSimple">
                            <thead>
                                <tr>
                                    <th># ID</th>
                                    <th>Name</th>
                                    <th>Slug</th>
                                    <th>Status</th>
                                    <th>Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                {viewCategory}
                            </tbody>
                        </table>
                    </div>
                </div>
            </MasterLayout>
        </div>

    )
}

export default All_Category