
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
         <div className="card col-6 mb-3" style={{ width:"28rem" }}>
          <img src={`http://127.0.0.1:8000/${items.image}`} />
            <div className="card-body">
              <h5 className="text-center card-title">{items.product_name}</h5>
            </div>
            <Link to="/product-details" className="btn btn-primary">Go </Link>
        </div>
       </div>
      )
    });
  };

  return (
    <div className="row">
      <div className="col-6 mt-3">
        {viewProductData}
      </div>
    </div>

  )
}
export default AllProduct








