import React, { useState, useEffect } from 'react'
import MasterLayout from '../../../layouts/admin/MasterLayout'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { swal } from 'sweetalert';
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const [categorylist, setCategorylist] = useState([]);
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
  
  const [picture, setPicture] = useState("");
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
        setCategorylist(res.data.category);
      }
    });
  }, []);

  const productSubmitFrom = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', picture.image);
    formData.append('category_id', productInput.category_id);
    formData.append('product_name', productInput.product_name);
    formData.append('slug', productInput.slug);
    formData.append('brand', productInput.brand);
    formData.append('selling_price', productInput.selling_price);
    formData.append('buying_price', productInput.buying_price);
    formData.append('quantity', productInput.quantity);
    formData.append('status', productInput.status);

    axios.post(`api/add-product`, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }).then(res => {
      navigate('/admin/AllProduct');
      if (res.data.status === 200) {
        swal("Success", res.data.message, "success");
        setError([]);
      }
      else if (res.data.status === 422) {
        // swal("All fields are mandetory");
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
              <Link to="/admin/AllProduct" className='btn btn-primary float-end'>All Product</Link>
            </h2>
            </div>
          </div>
          <form onSubmit={productSubmitFrom} encType="multipart/form-data">
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
                <input type="text" name='slug' onChange={handleInput} value={productInput.slug} className="form-control" aria-describedby="emailHelp" placeholder='Slug' />
                <span className='text-danger'>{errorlist.slug}</span>
              </div>
              <div className="col-md-6 mb-3 ">
                <label htmlFor="brand" className="form-label">Brand Name : </label>
                <input type="text" name='brand' onChange={handleInput} value={productInput.brand} className="form-control" aria-describedby="emailHelp" placeholder='Brand' />
                <span className='text-danger'>{errorlist.brand}</span>
              </div>
              <div className="col-md-6 mb-3 ">
                <label htmlFor="selling_price" className="form-label">Selling Price</label>
                <input type="text" name='selling_price' onChange={handleInput} value={productInput.selling_price} className="form-control" aria-describedby="emailHelp" placeholder='Selling Price' />
                <span className='text-danger'>{errorlist.selling_price}</span>
              </div>
              <div className="col-md-6 mb-3 ">
                <label htmlFor="buying_price" className="form-label">Buying Price</label>
                <input type="text" name='buying_price' onChange={handleInput} value={productInput.buying_price} className="form-control" aria-describedby="emailHelp" placeholder='Buying Price' />
                <span className='text-danger'>{errorlist.buying_price}</span>
              </div>
              <div className="col-md-6 mb-3 ">
                <label htmlFor="uantity" className="form-label">Quantity</label>
                <input type="text" name='quantity' onChange={handleInput} value={productInput.quantity} className="form-control" aria-describedby="emailHelp" placeholder='Quantity' />
                <span className='text-danger'>{errorlist.quantity}</span>
              </div>
              <div className="col-md-6 mb-3 ">
                <label htmlFor="image" className="form-label">Image</label>
                <input type="file" name='image' onChange={handleImage} className="form-control" />
                <span className='text-danger'>{errorlist.image}</span>
              </div>
              <div className="col-md-6">
                <div className="mb-2">
                  <label htmlFor="status">Status</label>
                  <select name="status" onChange={handleInput} value={productInput.status} className="form-control">
                    <option value="1">Active</option>
                    <option value="0">Block</option>
                  </select>
                  <span className='text-danger'>{errorlist.status}</span>
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