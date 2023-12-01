import React from 'react'
import MasterLayout from '../../../layouts/admin/MasterLayout'


const AddCategory = () => {
  return (
    <div className='ms-3'>
      <MasterLayout>
        <h3 className='mt-2'>Add Category</h3>
        <form>
          <div className="mb-3">
            <label for="categoryName " className="form-label">Category Name</label>
            <input type="text" className="form-control" id="categoryName" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label for="status" className="form-label">Status</label>
            <input type="text" className="form-control" id="status" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </MasterLayout>


    </div>
  )
}

export default AddCategory
