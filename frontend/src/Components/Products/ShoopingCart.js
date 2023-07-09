import React, { useEffect } from "react";
import KhaltiCheckout from "khalti-checkout-web";
import config from '../khalti/khalticonfig'
import { useState } from "react";
import cartService from "../../services/cart";
import axios from "axios";
 
const ShoopingCart = () => {
  let checkout = new KhaltiCheckout(config);
  const [showModal, setShowModal] = useState(false);
  const [carts, setCarts] = useState("");
  useEffect(() => {
    cartService
      .getAll()
      .then((res) => {
        setCarts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const HandleOrder = (cartId) => {
    const config = {
      headers:
      {
          Authorization:
              `bearer ${window.localStorage.getItem('token')}`
      }

  }
  alert(`${cartId}`)
  axios.post(`http://localhost:4000/order/createOrder?Productid=${cartId}`, { userid: window.localStorage.getItem('userid')}, config)

      .then((response) => {
        window.alert(response.data.status);
        alert("Sucessfully ordered")
      })
      .catch((err) => console.log(err));
  };

  const handleRemoveFromCart = (cartId, callback) => {
    const config = {
      headers: {
        Authorization: `bearer ${window.localStorage.getItem("token")}`,
      },
    };

    axios
      .delete(`http://localhost:4000/api/cart/${cartId}`)
      .then((response) => {
        alert(cartId);
        window.alert(response.data.status);
      })
      .catch((err) => console.log(err));
  };

  const removeCartItem = (cartId) => {
    handleRemoveFromCart(cartId, () => {
      setCarts(carts.filter((cart) => cart._id !== cartId)); 

    });
  };
  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      <div className="cart-items">
        {carts &&
          carts.data.map((cart) => {
            return (
              <div key={cart._id} className="cart-item row mb-3">
                <div className="col-sm-2">
                  <img
                    src={cart.Productid.img}
                    alt={cart.Productid.name}
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h3 className="card-title">{cart.Productid.name}</h3>
                    <h3 className="card-title">{cart.Productid.name}</h3>
                    <p className="card-text">{cart.Productid.desc}</p>
                    <div className="cart-item-price">
                      ${cart.Productid.price}
                    </div>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeCartItem(cart._id)}
                    >
                      Remove from Cart
                    </button>
                    <button
              className="btn btn-primary"
              onClick={() => setShowModal(true)}
            >
              Proceed to Checkout
            </button>
                    <div className="cart-summary">

          <div className="card-body">
            
            <div
              className="modal"
              tabIndex="-1"
              role="dialog"
              style={{ display: showModal ? "block" : "none" }}
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Verify Order</h5>
                    <button
                      type="button"
                      className="close"
                      onClick={() => setShowModal(false)}
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="form-group">
                      <label htmlFor="checkin">Check-in date:</label>
                      <input
                        type="date"
                        className="form-control"
                        id="checkin"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="checkout">Check-out date:</label>
                      <input
                        type="date"
                        className="form-control"
                        id="checkout"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="name">orderid:</label>
                      <input type="text" className="form-control" id="orderid" value={cart._id} readOnly/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="name">location:</label>
                      <input type="text" className="form-control" id="location" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="name">phone:</label>
                      <input type="text" className="form-control" id="phone" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <input type="email" className="form-control" id="email" />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </button>
                    <div>
        <button onClick={() =>{
          
          checkout.show({amount: 10000},
            
            )}
          
          }>Pay</button>        
    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
     
    </div>
  );
   
}

export default ShoopingCart