import React from 'react'
import Avatar from "react-avatar";

import { Link } from "react-router-dom";

const Contact = ({contact}) => {
    const {name,phone,email,id} = contact
    return (
        <tr>
        <td>
       <div className="custom-control custom-checkbox">
           <input
               id="selectAll"
               type="checkbox"
               className="custom-control-input"
           />
           <label
               htmlFor="selectAll"
               className="custom-control-label"
           ></label>
       </div>
   </td>
   <td>
        <Avatar className="mr-2" name={name} size="45" round={true} /> {name}
      </td>
       <td>{phone}</td>
       <td>{email}</td>

       <td className="actions">
       <Link to={`/contacts/edit/${id}`}><span className="material-icons mr-2">edit</span></Link>
        <a  href="#"><span className="material-icons mr-2">remove_circle</span></a>

      </td>
   </tr>
    )
}

export default Contact
