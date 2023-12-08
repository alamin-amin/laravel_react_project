import React, { useState, useEffect } from 'react'
import MasterLayout from '../../../layouts/admin/MasterLayout'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { swal } from 'sweetalert';

const AddProduct = () => {
  const [categorylist, setCategory] = useState([]);
  const [productInput, setProduct] = useState({
    category_id: '',
    product_name: '',
    slug: '',
    brand: '',
    selling_price: '',
    buying_price: '',
    quantity: '',
    status: '',
  });

  const [picture, setPicture] = useState([]);
  const [errorlist, setError] = useState([]);

  const handleInput = (e) => {
    e.persist();
    setProduct({ ...productInput, [e.target.name]: e.target.value });
  }


  const handleImage = (e) => {
    setPicture({ image: e.target.files[0] });
  }

  useEffect(() => {
    axios.get(`/api/all-category`).then(res => {
      if (res.data.status === 200) {
        setCategory(res.data.category);
      }
    });
  })


  const productSubmitFrom = (e) => {
    e.preventDefault();

    const fromData = new fromData();
    fromData.append('image', picture.image);
    fromData.append('category_id', productInput.category_id);
    fromData.append('product_name', productInput.product_name);
    fromData.append('slug', productInput.slug);
    fromData.append('brand', productInput.brand);
    fromData.append('selling_price', productInput.selling_price);
    fromData.append('buying_price', productInput.buying_price);
    fromData.append('quantity', productInput.quantity);
    fromData.append('status', productInput.status);


    axios.post(`api/add-product`, fromData).then(res => {
      if (res.data.status === 200) {
        swal("Success", res.data.message, "success");
        setError([]);
      }
      else if (res.data.status === 422) {
        swal("All fields afe mandetory", "", "error");
        setError(res.data.errors);
      }
    });
  }

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
          <form onSubmit={productSubmitFrom} encType='multipart/form-data'>
            <div className='row'>
              <div className="col-md-6 mb-2">
                <label htmlFor="name">Category : </label>
                <select name="category_id" onChange={handleInput} value={productInput.category_id} className="form-control">
                  <option value=""> Select a category</option>
                  {
                    categorylist.map((item) => {
                      return (
                        <option value={item.id} key={item.id}>{item.categoryName}</option>
                      )
                    })
                  };
                </select>
                <span className='text-danger'>{errorlist.category_id}</span>
              </div>
              <div className="col-md-6 mb-3 ">
                <label htmlFor="name " className="form-label">Product Name : </label>
                <input type="text" name='product_name' onChange={handleInput} value={productInput.product_name} className="form-control" aria-describedby="emailHelp" placeholder='Product Name' />
                <span className='text-danger'>{errorlist.product_name}</span>
              </div>
              <div className="col-md-6 mb-3 ">
                <label htmlFor="slug" className="form-label">Slug</label>
                <input type="text" name='slug' onChange={handleInput} value={productInput.slug} className="form-control" id="slug" aria-describedby="emailHelp" placeholder='Slug' />
              </div>
              <div className="col-md-6 mb-3 ">
                <label htmlFor="brand" className="form-label">Brand Name : </label>
                <input type="text" name='brand' onChange={handleInput} value={productInput.brand} className="form-control" aria-describedby="emailHelp" placeholder='Brabd' />
              </div>
              <div className="col-md-6 mb-3 ">
                <label htmlFor="selling_price" className="form-label">Selling Price</label>
                <input type="text" name='selling_price' onChange={handleInput} value={productInput.selling_price} className="form-control" aria-describedby="emailHelp" placeholder='Selling Price' />
              </div>
              <div className="col-md-6 mb-3 ">
                <label htmlFor="buying_price" className="form-label">Buying Price</label>
                <input type="text" name='buying_price' onChange={handleInput} value={productInput.buying_price} className="form-control" aria-describedby="emailHelp" placeholder='Buying Price' />
              </div>
              <div className="col-md-6 mb-3 ">
                <label htmlFor="quantity" className="form-label">Quantity</label>
                <input type="text" name='quantity' onChange={handleInput} value={productInput.quantity} className="form-control" aria-describedby="emailHelp" placeholder='Quantity' />
              </div>
              <div className="col-md-6 mb-3 ">
                <label htmlFor="image" className="form-label">Image</label>
                <input type="file" name='image' onChange={handleImage} className="form-control" aria-describedby="emailHelp" placeholder='Image' />
              </div>
              <div className="col-md-6">
                <div className="mb-2">
                  <label htmlFor="status">Status</label>
                  <select name="status" onChange={handleInput} value={productInput.status} className="form-control">
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