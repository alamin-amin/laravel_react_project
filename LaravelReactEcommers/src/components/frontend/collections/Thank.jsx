import React from 'react'
import { Link } from 'react-router-dom';

function Thank() {
    return (
        <div>
            <div className='card card-body py-5 test-center shadow-sm'>

                <div className='' style={{ maxHeight: '230px' }}>
                    <Link to="/" className='btn btn-primary float-end'>Back to Home Page</Link>
                    <h3 className='text-center fw-b'> Thanks for shaping </h3>
                </div>

            </div>
        </div>
    )
}

export default Thank