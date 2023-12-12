import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Master } from '../Master'
import axios from 'axios';



const ViewCategory = () => {
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        axios.get(`/api/getCategory`).then(res => {
            if (res.data.status === 200) {
                setCategory(res.data.category);
                setLoading(false);
            }
        });
    }, []);
    if (loading) {
        return <h3>loading....</h3>
    } else {
        var showCategoryList = '';
        showCategoryList = category.map((item, idx) => {
            return (
                <div className="col-md-4" key={idx}>
                    <div className="card">
                        <Link to=''>
                            <img src="" alt={item.categoryName} className='w-100' />
                        </Link>
                        <div className="card-body">
                            <Link to={`collections/${item.slug}`}>
                                <h5>{item.categoryName}</h5>
                            </Link>
                        </div>
                    </div>
                </div>
            )
        });
    }

    return (
        <>
            <Master>
                <div>
                    <div className='py-2 bg-success'>
                        <div className='container'>
                            <h5> Category Page</h5>
                        </div>
                    </div>
                    <div className='py-2'>
                        <div className='container'>
                            <div className='row'>
                                <h5>{showCategoryList}</h5>
                            </div>

                        </div>
                    </div>
                </div>
            </Master>
        </>

    )
}

export default ViewCategory