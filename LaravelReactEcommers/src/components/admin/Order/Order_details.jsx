import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link,useParams } from 'react-router-dom';
import MasterLayout from '../../../layouts/admin/MasterLayout'



function Order_details() {

    const {id} = useParams();
    const [orderDetails, setOrderDetails] = useState([]);

    useEffect(() => {
        axios.get(`/api/admin-order-details/${id}`).then(res => {
            if (res.data.status === 200) {
                setOrderDetails(res.data.order);
                console.log(orderDetails);
            }
        });
    }, []);

  return (
    <MasterLayout>
    <div>
        <div className="card mb-4">
            <div className="p-3">
                <div><h2> Oder Details
                    <Link to="/admin/addProduct" className='btn btn-primary float-end'>Add Product</Link>
                </h2>
                </div>
            </div>

            <div className="card-body">
                <div className='table-responsive'>
                    <table className='table table-striped' id="datatablesSimple">
                        <thead>
                            <tr>
                                <th># ID</th>
                                <th>Product Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                        {orderDetails.map((row, index) => (
                            <tr key={index}>
                                <td>{row.id}</td>
                                <td>{row.product.product_name}</td>
                                <td>{row.quantity}</td>
                                <td>{row.price}</td>

                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</MasterLayout>
  )
}

export default Order_details