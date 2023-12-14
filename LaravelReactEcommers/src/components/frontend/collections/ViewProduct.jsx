import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Master } from '../Master'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const ViewProduct = (props) => {
  const navigate = useNavigate();
  const { product_slug } = useParams();

  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let isMounted = true;

    // const product_slug = props.match.params.slug;
    axios.get(`/api/fetchproduct/${product_slug}`).then(res => {
      if (isMounted) {
        if (res.data.status === 200) {
          setProduct(res.data.product_data.product);
          setCategory(res.data.product_data.category);
          setLoading(false);
        }
        else if (res.data.status === 400) {
          swal("Warning", res.data.status, "");
        }
        else if (res.data.status === 404) {
          navigate('/collections');
          swal("Warning", res.data.status, "error");
        }
      }
    });

    return () => {
      isMounted = false
    };
  }, []);

  if (loading) {
    return <h3>Lodaing...</h3>
  } else {
    var showProductList = '';
    showProductList = product.map((item, idx) => {
      return (
        <div className='col-md-3'>
          <div className='card'>
            <Link to="">
              <img src={`http://127.0.0.1:8000/${item.image}`} className='w-100' alt={item.product_name} />
            </Link>

            <div className='card-body'>
              <Link to="">
                <h4>{item.product_name}</h4>
              </Link>
            </div>
          </div>
        </div>
      )
    })

  }

  return (
    <>
      <Master>
        <div>
          <div className='py-3 bg-info'>
            <div className='container'>
              <h5> Category /product Name</h5>
            </div>
          </div>
          <div className='py-3'>
            <div className='container'>
              <div className="row">
                <h5>{showProductList}</h5>
              </div>

            </div>
          </div>
        </div>
      </Master>
    </>


  )
}

export default ViewProduct