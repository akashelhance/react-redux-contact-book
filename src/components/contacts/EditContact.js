import React from 'react'

const EditContact = () => {
    return (
        <div className="card border-0 shadow">
        <div className="card-header">Edit a Contact</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Name"
              
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Phone Number"
               
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your E-mail Address"
               
              />
            </div>
            <button className="btn btn-warning" type="submit">
              Update Contact
            </button>
          </form>
        </div>
      </div>
    )
}

export default EditContact
