import React, { useState } from 'react'
import MasterLayout from '../../../layouts/admin/MasterLayout'
import axios from 'axios';
 import { swal } from 'sweetalert';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const AddCategory = () => {
  const navigate = useNavigate();
  const [categoryInput, setCategory] = useState({
    categoryName: '',
    slug: '',
    status: '',
    error_list: [],
  });
  const handleInput = (e) => {
    setCategory({ ...categoryInput, [e.target.name]: e.target.value }); 
  }
  const submitCategoryFrom = (e) => {
    axios.post(`api/add-category`, data).then(res => {
      if (res.data.status === 200) {
        swal("Success", res.data.message, "success");
        document.getElementById('categoryFrom').reset();
      }
      else if (res.data.status === 400) {
        setCategory({ ...categoryInput, error_list: res.data.errors });
      }
    });
   
    e.preventDefault();
    navigate('/admin/allCategory')
  }
  const data = {
    categoryName: categoryInput.categoryName,
    slug: categoryInput.slug,
    status: categoryInput.status,
  }


  return (
    <div className='ms-3'>
      <MasterLayout>
        <div className='container-fluid'>
          <div className="p-3">
            <div><h2>Add Category
              <Link to="/admin/allCategory" className='btn btn-primary float-end'>All Category</Link>
            </h2>
            </div>
          </div>
          <form onSubmit={submitCategoryFrom}>
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
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </MasterLayout>


    </div>
  )
}

export default AddCategory
