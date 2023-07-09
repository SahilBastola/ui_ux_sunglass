import React from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const ProductDetailPage = ({ addToCart }) => {
  const { state: { product, productId  } } = useLocation();
  const navigate = useNavigate();

  const HandleOrder = (e) => {
    const config = {
      headers:
      {
          Authorization:
              `bearer ${window.localStorage.getItem('token')}`
      }

  }
  alert(`${productId}`)
  axios.post(`http://localhost:4000/api/order/createOrder?Productid=${productId}`, { userid: window.localStorage.getItem('userid')}, config)

      .then((response) => {
        window.alert(response.data.status);
        alert("Sucessfully ordered")
      })
      .catch((err) => console.log(err));
  };

  const handleAddToCart = (e) => {

    const config = {
      headers:
      {
          Authorization:
              `bearer ${window.localStorage.getItem('token')}`
      }
  }
  alert(window.localStorage.getItem('userid'))
  axios.post(`http://localhost:4000/api/cart/createcart?Productid=${productId}`, { userid: window.localStorage.getItem('userid')}, config)


      .then((response) => {
        window.alert(response.data.status);
        alert("Added To Cart")
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container product-detail-page">
      <div className="row">
        <div className="col-md-4  ">
          <img src={product.img} alt={product.title} className="img-fluid" />
        </div>
        <div className="col-md-8">
          <h2>{product.title}</h2>
          <p>{product.desc}</p>
          <div className="address">
            <span>Rating: </span>
            <strong>5</strong>
          </div>
          <div className="price">
            <span>Status: </span>
            <strong>{product.title}</strong>
          </div>
          <div className="price">
            <span>Price: </span>
            <strong>{product.cheapestPrice}</strong>
          </div>
          <div className="address">
            <span>Address: </span>
            <strong>{product.address}</strong>
          </div>
          <div className="buttons mt-3">
            <button className="btn btn-primary add-to-cart-btn me-3"
             onClick={handleAddToCart}
             >
              Add to Cart
            </button>
            <button className="btn btn-success buy-now-btn" onClick={HandleOrder} >Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;