import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import MasterLayout from '../../../layouts/admin/MasterLayout'
 import { swal } from 'sweetalert';

function EditCategory(props) {
    const [categoryInput, setCategory] = useState([]);
    useEffect(() => {
        const category_id = props.match.params.id;
        axios.get(`/api/edit-category/${category_id}`).then(res => {
            if (res.status === 200) {
                setCategory(res.data.category);
            } else if (res.status === 400) {
                swal("Error", res.data.message, "error");
            }
        });
    }, [props.match.params.id]);

    const handleInput = (e) => {
        e.persist();
        setCategory({ ...categoryInput, [e.target.name]: e.target.value })
    }


    return (
        <div className='ms-3'>
            <MasterLayout>
                <div className='container-fluid'>
                    <div className="p-3">
                        <div><h2>Edit Category
                            <Link to="/admin/allCategory" className='btn btn-primary float-end'>Back</Link>
                        </h2>
                        </div>
                    </div>
                    <form>
                        <div className='row'>
                            <div className="col-md-6 mb-3 ">
                                <label htmlFor="categoryName " className="form-label">Category Name</label>
                                <input type="text" name='categoryName' onChange={handleInput} value={categoryInput.categoryName} className="form-control" id="categoryName" aria-describedby="emailHelp" placeholder='Category Name' />
                            </div>
                            <div className="col-md-6 mb-3 ">
                                <label htmlFor="slug" className="form-label">Slug</label>
                                <input type="text" name='slug' onChange={handleInput} value={categoryInput.slug} className="form-control" id="slug" aria-describedby="emailHelp" placeholder='Slug' />
                            </div>
                            <div className="col-md-6">
                                <div className="mb-2">
                                    <label htmlFor="status">Status</label>
                                    <select name="status" onChange={handleInput} value={categoryInput.status} id="status" className="form-control">
                                        <option value="1">Active</option>
                                        <option value="0">Block</option>
                                    </select>
                                </div>
                            </div>
                            <div className=" mb-3">
                                <button type="submit" className="btn btn-primary">Updete</button>
                            </div>
                        </div>
                    </form>
                </div>
            </MasterLayout>
        </div>
    )
}

export default EditCategory