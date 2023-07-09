import React, { useState, useEffect } from 'react';
import axios from "axios";

const AdminOrderPage = () => {

    const [Orders, setOrders] = useState([]);

    useEffect(() => {
        const config = {
            headers:
            {
                Authorization:
                    `bearer ${window.localStorage.getItem('token')}`
            }
        }
        axios.get(`http://localhost:4000/api/order/`,config)
            .then((res) => {
                setOrders(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const handleDeleteOrder = (orderId) => {
        setOrders(Orders.filter((order) => order._id !== orderId));
    };

    return (
        <section id="contact-form">
            <div className="container shadow-lg p-3 mt-5 py-5 rounded text-center">
                <div className="container">
                    <h1 className="text-center my-5">Order Details</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>HostelName</th>
                                <th>username</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
    
                                        <tr ><td>Rich dad poor dad</td>
                                            <td>Tekk</td>
                                            <td>RS 700</td>
                                            <td>
                                                
                                                
                                                <button className="btn btn-success mx-2">Confirm</button>
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

export default AdminOrderPage;