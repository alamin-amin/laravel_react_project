import React, { useState } from 'react'
import MasterLayout from '../../../layouts/admin/MasterLayout'
import axios from 'axios';
import { swal } from 'sweetalert';


const AddCategory = () => {
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
    e.preventDefault();
  }
  const data = {
    categoryName: categoryInput.categoryName,
    slug: categoryInput.slug,
    status: categoryInput.status,
  }
  axios.post(`api/add-category`, data).then(res => {
    if (res.data.status === 200) {
      swal("Success", res.data.message, "success");
      document.getElementById('categoryFrom').reset();
    }
    else if (res.data.status === 400) {
      setCategory({ ...categoryInput, error_list: res.data.errors });
    }


  });

  return (
    <div className='ms-3'>
      <MasterLayout>
        <div className='container-fluid'>
          <h3 className='mt-2'>Add Category</h3>
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
