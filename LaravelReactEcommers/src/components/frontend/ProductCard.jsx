
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



  const deleteProduct = (e, id) => {
    const thisClicked = e.currentTarget;
    thisClicked.innerText = "Deleting";

    axios.delete(`api/delete-product/${id}`).then(res => {
      if (res.data.status === 200) {
        swal('Success', res.data.message, 'success');
        thisClicked.closest("tr").remove();

      }
      else if (res.data.status === 404) {
        swal('Success', res.data.message, 'success');
        thisClicked.innerText = "Delete";
      }
    });
    e.preventDefault();
  }

  var viewProductData = '';
  if (loading) {
    return <h2 className='text-center pt-5'>Products is comming</h2>
  } else {
    viewProductData = viewProduct.map((items) => {
      return (
        <div className='row'>
          <div className="col-3">
            <Link to='#'>
              <div className=''>
                <p> <img src={`http://127.0.0.1:8000/${items.image}`} /></p>
              </div>
              <div>
                <p> product :{items.product_name} </p>
              </div>
            </Link>
          </div>
        </div>
      )
    });
  };

  return (
    <div>
      <div className="mb-2">
        {viewProductData}
      </div>
    </div>

  )
}

export default AllProduct








// import React from 'react'
// import {motion} from 'framer-motion';

// const ProductCard = () => {
//   let FavoritesFood = {
//     display: 'flex',
//     alignItems: 'center',
//     height: '112px',
//     backgroundColor: '#ffff80',
//   }

//   let foodcards = {
//     display: 'flex',
//     alignItems: 'center',
//   }
//   return (
//     <div >
//       <div className='mt-3' style={FavoritesFood}>
//         <h1 style={{ textAlign: 'center', width: '100%' }} >FOODBOX'S FAVORITES</h1>
//       </div>
//       <div className='row row-cols-sm-1 row-cols-md-2 row-cols-lg-3  mt-4 mb-4 ms-5 ' >

//         <div className=''>
//           <motion.div whileHover={{ scale: 1.1 }} className="card" style={{ width: '27rem', heiggt: '200px' }}>
//             <img src="src/assets/frontend/hp.webp" className="card-img-top" alt="..." />
//             <div className="card-body">
//               <h3 className="card-title">5 Pc crispy Combo</h3>

//               <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//               <div className='mb-2 text-success text-end fs-4'>
//                 <i className='fas fa-star' />
//                 <i className='fas fa-star' />
//                 <i className='fas fa-star' />
//                 <i className='fas fa-star' />
//                 <i className='fas fa-star-half-alt' />
//               </div>
//               <a href="#" className="btn btn-warning pt-2 fs-3" style={{ width: '100%', height: '62px' }}> <i className='fas fa-shopping-cart pe-2' />Add TO BAG</a>
//             </div>
//           </motion.div>
//         </div>
//         <div className=''>
//           <motion.div drag whileDrag={{ scale: 1.3 }} className="card" style={{ width: '27rem', heiggt: '200px' }}>
//             <img src="src/assets/frontend/pc.webp" className="card-img-top" alt="..." />
//             <div className="card-body">
//               <h3 className="card-title">Bacon Ranch cheiken </h3>
//               <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//               <div className='mb-2 text-success text-end fs-4'>
//                 <i className='fas fa-star' />
//                 <i className='fas fa-star' />
//                 <i className='fas fa-star' />
//                 <i className='fas fa-star' />
//                 <i className='fas fa-star-half-alt' />
//               </div>
//               <a href="#" className="btn btn-warning pt-2 fs-3" style={{ width: '100%', height: '62px' }}> <i className='fas fa-shopping-cart pe-2' />Add TO BAG</a>
//             </div>
//           </motion.div>
//         </div>
//         <div className=''>
//           <motion.div whileHover={{ scale: 1.1 }} className="card" style={{ width: '27rem', heiggt: '200px' }}>
//             <img src="src/assets/frontend/Panjabi.webp" className="card-img-top" alt="..." />
//             <div className="card-body">
//               <h3 className="card-title">Chicken Fajitas</h3>
//               <p className="card-text">Chicken Fajitas served with rice and beans, tortillas, guacamole, salsa and sour cream</p>
//               <div className='mb-2 text-success text-end fs-4'>
//                 <i className='fas fa-star' />
//                 <i className='fas fa-star' />
//                 <i className='fas fa-star' />
//                 <i className='fas fa-star-half-alt' />
//                 <i className='fas fa-star-half-alt' />
//               </div>
//               <a href="#" className="btn btn-warning pt-2 fs-3" style={{ width: '100%', height: '62px' }}> <i className='fas fa-shopping-cart pe-2' />Add TO BAG</a>
//             </div>
//           </motion.div>
//         </div>
//         <div className=''>
//           <motion.div whileHover={{ scale: 1.1 }} className="card" style={{ width: '27rem', heiggt: '200px' }}>
//             <img src="src/assets/frontend/jew.webp" className="card-img-top" alt="..." />
//             <div className="card-body">
//               <h3 className="card-title">Chicken Fajitas</h3>
//               <p className="card-text">cream</p>
//               <div className='mb-2 text-success text-end fs-4'>
//                 <i className='fas fa-star' />
//                 <i className='fas fa-star' />
//                 <i className='fas fa-star' />
//                 <i className='fas fa-star-half-alt' />
//                 <i className='fas fa-star-half-alt' />
//               </div>
//               <a href="#" className="btn btn-warning pt-2 fs-3" style={{ width: '100%', height: '62px' }}> <i className='fas fa-shopping-cart pe-2' />Add TO BAG</a>
//             </div>
//           </motion.div>
//         </div>
//         <div className=''>
//           <motion.div whileHover={{ scale: 1.1 }} className="card" style={{ width: '27rem', heiggt: '200px' }}>
//             <img src="src/assets/frontend/pc.webp" className="card-img-top" alt="..." />
//             <div className="card-body">
//               <h3 className="card-title">Chicken Fajitas</h3>
//               <p className="card-text">cream</p>
//               <div className='mb-2 text-success text-end fs-4'>
//                 <i className='fas fa-star' />
//                 <i className='fas fa-star' />
//                 <i className='fas fa-star' />
//                 <i className='fas fa-star-half-alt' />
//                 <i className='fas fa-star-half-alt' />
//               </div>
//               <a href="#" className="btn btn-warning pt-2 fs-3" style={{ width: '100%', height: '62px' }}> <i className='fas fa-shopping-cart pe-2' />Add TO BAG</a>
//             </div>
//           </motion.div>
//         </div>
//         <div className=''>
//           <motion.div whileHover={{ scale: 1.1 }} className="card" style={{ width: '27rem', heiggt: '200px' }}>
//             <img src="src/assets/frontend/hp.webp" className="card-img-top" alt="..." />
//             <div className="card-body">
//               <h3 className="card-title">Chicken Fajitas</h3>
//               <p className="card-text">cream</p>
//               <div className='mb-2 text-success text-end fs-4'>
//                 <i className='fas fa-star' />
//                 <i className='fas fa-star' />
//                 <i className='fas fa-star' />
//                 <i className='fas fa-star-half-alt' />
//                 <i className='fas fa-star-half-alt' />
//               </div>
//               <a href="#" className="btn btn-warning pt-2 fs-3" style={{ width: '100%', height: '62px' }}> <i className='fas fa-shopping-cart pe-2' />Add TO BAG</a>
//             </div>
//           </motion.div>
//         </div>
//         <div className=''>
//           <motion.div whileHover={{ scale: 1.1 }} className="card" style={{ width: '27rem', heiggt: '200px' }}>
//             <img src="src/assets/frontend/jew.webp" className="card-img-top" alt="..." />
//             <div className="card-body">
//               <h3 className="card-title">Chicken </h3>
//               <p className="card-text">cream</p>
//               <div className='mb-2 text-success text-end fs-4'>
//                 <i className='fas fa-star' />
//                 <i className='fas fa-star' />
//                 <i className='fas fa-star' />
//                 <i className='fas fa-star-half-alt' />
//                 <i className='fas fa-star-half-alt' />
//               </div>
//               <a href="#" className="btn btn-warning pt-2 fs-3" style={{ width: '100%', height: '62px' }}> <i className='fas fa-shopping-cart pe-2' />Add TO BAG</a>
//             </div>
//           </motion.div>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default ProductCard





