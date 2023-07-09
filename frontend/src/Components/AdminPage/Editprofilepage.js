import React, { useState, useEffect } from 'react';
import {useParams ,useLocation} from 'react-router-dom';
import productService from '../../services/productServices';

const EditProductPage = () => {
    
 
   const { state: { product, productId  } ,} = useLocation()
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [cheapestPrice, setCheapestPrice] = useState('');
  const [address, setAddress] = useState('');

 
  return (
    <div className='container'>
      <h2 className='text-center'>Edit Hostel</h2>
      <form>
        <div className='mb-3'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input
            type='text'
            className='form-control'
            id='name'
            value={product.name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='desc' className='form-label'>
            Description
          </label>
          <textarea
            className='form-control'
            id='desc'
            rows='3'
            value={product.desc}
            onChange={(e) => setDesc(e.target.value)}
            required
          ></textarea>
        </div>
        <div className='mb-3'>
          <label htmlFor='cheapestPrice' className='form-label'>
            Cheapest Price
          </label>
          <input
            type='text'
            className='form-control'
            id='cheapestPrice'
            value={product.cheapestPrice}
            onChange={(e) => setCheapestPrice(e.target.value)}
            required
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='address' className='form-label'>
            Address
          </label>
          <input
            type='text'
            className='form-control'
            id='address'
            value={product.address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditProductPage;