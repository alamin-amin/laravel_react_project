
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
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

  var viewProductData = '';
  if (loading) {
    return <h2 className='text-center pt-5'>Products is comming</h2>
  } else {
    viewProductData = viewProduct.map((items) => {
      return (
        <div className='row'>
          <div className="card mb-4" style={{ width: "20rem" }}>
            <img src={`http://127.0.0.1:8000/${items.image}`} />
            <div className="card-body">
              <h5 className="text-center card-title">{items.product_name}</h5>
            </div>
            <div className='mb-2 text-success text-end fs-4'>
              <i className='fas fa-star' />
              <i className='fas fa-star' />
              <i className='fas fa-star' />
              <i className='fas fa-star' />
              <i className='fas fa-star-half-alt' />
            </div>
            <Link to={`/product-details/${items.id}`} className="btn btn-primary"><i className='fas fa-shopping-cart pe-2' />Add to Cart </Link>
          </div>
        </div>
      )
    });
  };

  return (
    <div className="row">
      <div className="d-flex flex-wrap p-3 gap-5 ms-5 mt-5">
        {viewProductData}
      </div>
    </div>

  )
}
export default AllProduct








