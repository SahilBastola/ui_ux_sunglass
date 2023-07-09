import React , { useEffect, useState }from 'react'
import productService from "../../services/productServices";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
 
const Products = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState("");
  useEffect(() => {
    productService
      .getAll()
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <section id="product">
      <h1 class="text-center py-2 text-danger">Our Products</h1>
 <div class="container-fluid  my-4 p-3" style={{position: "relative"}}>
  <div class="row row-cols- row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
    {products &&
                  products?.data.map((product) => {
                    return (
      <div class="card  card-shadows ">
        <a href="/">
          <img src={product.img} class="card-img-top" alt="product.title" />
        </a>
        {/* <div class="label-top shadow-sm">
          <a class="text-white" href="/">asus</a>
        </div> */}
        <div class="card-body">
          <div class="clearfix mb-3">
            <span class="float-start badge rounded-pill bg-success">Rs {product.price}</span>
 
          </div>
          <h5 class="card-title">
            <a target="_blank" href="/">{product.title}</a>
          </h5>
          <div class="row">
                    <div class="col">
                    <Link to={`/ProductDetail/${product.id}`} state={{ productId: product._id, product }}>
  <button className="btn btn-warning w-100" type="submit">
    View Details
  </button>
</Link>
                    </div>
                  
                  </div>
           
        </div>
      </div>
       );
      })}

   

  </div>
</div>

{/* <div class="small text-muted my-4">Images by <a target="_blank" href="https://www.amazon.com/">Amazon</a></div> */}
</section>
  )
}

export default Products