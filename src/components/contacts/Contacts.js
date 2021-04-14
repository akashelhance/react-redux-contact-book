import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import Contact from './Contact';

const Contacts = () => {
    const contacts = useSelector((state) => state.contacts);
    console.log(contacts)
    return (
        <div>
            <table className="table shadow">
                <thead className="bg-danger text-white">
                    <tr>
                        <th>
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
                        </th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>E-mail</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contacts.map(contact =>(
                          <Contact contact={contact}/>
                        ))
                    }
                   
             
                </tbody>
            </table>
        </div>
    )
}

export default Contacts
