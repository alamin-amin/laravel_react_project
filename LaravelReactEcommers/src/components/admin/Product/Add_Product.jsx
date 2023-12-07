import React, { useState, useEffect } from 'react'
import MasterLayout from '../../../layouts/admin/MasterLayout'
import { Link } from 'react-router-dom';
import axios from 'axios';

const AddProduct = () => {
  const [categorylist, setCategory] = useState([]);
  useEffect(() => {
    axios.get(`/api/all-category`).then(res => {
      if (res.data.status === 200) {
        setCategory(res.data.category);
      }
    });
  })


  return (
    <div className='ms-3'>
      <MasterLayout>
        <div className='container-fluid'>
          <div className="p-3">
            <div><h2>Add Product
              <Link to="/admin/allCategory" className='btn btn-primary float-end'>All Product</Link>
            </h2>
            </div>
          </div>
          <form encType='multipart/form-data'>
            <div className='row'>
              <div class="col-md-6 mb-2">
                <label for="name">Category : </label>
                <select name="category" id="category" class="form-control">
                  <option value=""> Select a category</option>
                  {
                    categorylist.map((item) => {
                      return (
                        <option value={item.id} key={item.id}>{item.categoryName}</option>
                      )
                    })
                  };
                </select>
              </div>
              <div className="col-md-6 mb-3 ">
                <label htmlFor="name " className="form-label">Product Name : </label>
                <input type="text" name='product_name' className="form-control" aria-describedby="emailHelp" placeholder='Product Name' />
              </div>
              <div className="col-md-6 mb-3 ">
                <label htmlFor="slug" className="form-label">Slug</label>
                <input type="text" name='slug' className="form-control" id="slug" aria-describedby="emailHelp" placeholder='Slug' />
              </div>
              <div className="col-md-6 mb-3 ">
                <label htmlFor="brand" className="form-label">Brand Name : </label>
                <input type="text" name='brand' className="form-control" aria-describedby="emailHelp" placeholder='Brabd' />
              </div>
              <div className="col-md-6 mb-3 ">
                <label htmlFor="selling_price" className="form-label">Selling Price</label>
                <input type="text" name='selling_price' className="form-control" aria-describedby="emailHelp" placeholder='Selling Price' />
              </div>
              <div className="col-md-6 mb-3 ">
                <label htmlFor="buying_price" className="form-label">Buying Price</label>
                <input type="text" name='buying_price' className="form-control" aria-describedby="emailHelp" placeholder='Buying Price' />
              </div>
              <div className="col-md-6 mb-3 ">
                <label htmlFor="quantity" className="form-label">Quantity</label>
                <input type="text" name='quantity' className="form-control" aria-describedby="emailHelp" placeholder='Quantity' />
              </div>
              <div className="col-md-6 mb-3 ">
                <label htmlFor="image" className="form-label">Image</label>
                <input type="file" name='image' className="form-control" aria-describedby="emailHelp" placeholder='Image' />
              </div>
              <div className="col-md-6">
                <div className="mb-2">
                  <label htmlFor="status">Status</label>
                  <select name="status" id="status" className="form-control">
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

export default AddProduct