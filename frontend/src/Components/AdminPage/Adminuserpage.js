import React, { useState,useEffect } from 'react'
import axios from "axios";

const AdminUserPage = () => {

    const [users, setUsers] = useState("");
    useEffect(() => {
      axios.get(`http://localhost:4000/api`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
    }, []);
    
      const handleDeleteOrder = (orderId) => {
        setUsers(users.filter((user) => user._id !== orderId));
      };
  return (
    <section id="contact-form">
        
    <div class="container shadow-lg p-3 mt-5 py-5 rounded text-center   ">
    <div className="container">
      <h1 className="text-center my-5">User Details</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
     
            <tr>
              <td>Tekk</td>
              <td>tekk@gmail.com</td>
              <td>
                <button className="btn btn-success mx-2">Edit</button>
                <button className="btn btn-danger mx-2" onClick={() => handleDeleteOrder(1)}>Delete</button>
              </td>
            </tr>

            <tr >
              <td>sahil</td>
              <td>sahil@gmail.com</td>
              <td>
                <button className="btn btn-success mx-2">Edit</button>
                <button className="btn btn-danger mx-2" onClick={() => handleDeleteOrder(1)}>Delete</button>
              </td>
            </tr>

            <tr >
              <td>amir</td>
              <td>amir@gmail.com</td>
              <td>
                <button className="btn btn-success mx-2">Edit</button>
                <button className="btn btn-danger mx-2" onClick={() => handleDeleteOrder(1)}>Delete</button>
              </td>
            </tr>
          
            
        </tbody>
      </table>
    </div>
       
       </div>
  
  </section>
  )
}

export default AdminUserPage