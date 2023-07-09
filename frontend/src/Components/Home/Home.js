import React from 'react'
import About from "./About"
import Contact from "./Contact"
const Home = () => {
  return (
    <>
    <section className="home  ">
    <div className="container-fluid ">
        <div class="row">
            <div class="col-md-6 py-3">
            
               
                <h1 class="text-dark ms-5 mt-5 py-5 fw-bold headings">Welcome To <span class="text-danger"> Book Store</span></h1>
                <h2 class="ms-5 fst-italic text-success">When you read someone else gets Inspired</h2>
                <br/>
                 
              
                <a href="/Product" class="btn btn-warning ms-5 fw-bold fs-5">Buy now</a>

            </div>
            <div class="col-md-6    text-center ">
              
                <img src="./image/book.gif" class="img-fluid" alt="homepage"   />
                
            </div>

        </div>
    </div>
   
  

  {/* <!-- {{!-- Main section ends --}} --> */}

  {/* Top rated books sections*/}

  <section id="product">
      
 <div class="container-fluid  my-4 p-3" style={{position: "relative"}}>
 <h1 class="py-2 mb-2 text-danger">Tranding Books</h1>
  <div class="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
    <div class="col ">
      <div class="card  card-shadows ">
        <a href="/">
          <img src="./image/arrival_1.jpg" class="card-img-top" alt="product.title" />
        </a>
        {/* <div class="label-top shadow-sm">
          <a class="text-white" href="/">asus</a>
        </div> */}
        <div class="card-body">
          <div class="clearfix mb-3">
            <span class="float-start badge rounded-pill bg-success">1.245$</span>
 
          </div>
          <h5 class="card-title">
            <a target="_blank" href="/">random text</a>
          </h5>

          <div class="d-grid gap-2">

            <a href="/" class="btn btn-warning bold-btn">Buy now</a>
          </div>
           
        </div>
      </div>
    </div>
    <div class="col ">
      <div class="card  card-shadows">
        <a href="/">
          <img src="./image/arrival_2.jpg"class="card-img-top" alt="product.title" />
        </a>
        <div class="card-body">
          <div class="clearfix mb-3">
            <span class="float-start badge rounded-pill bg-success">2.345$</span>
 
          </div>
          <h5 class="card-title">
            <a target="_blank" href="/"> </a>
          </h5>

          <div class="d-grid gap-2">

            <a href="/" class="btn btn-warning bold-btn">Buy now</a>

          </div>
           
        </div>
      </div>
    </div>
    <div class="col ">
      <div class="card card-shadows">
        <a href="/">
          <img src="./image/arrival_3.jpg" class="card-img-top" alt="product.title" />
        </a>

        {/* <div class="label-top shadow-sm">
          <a class="text-white" href="/">lenovo</a>
        </div> */}
        <div class="card-body">
          <div class="clearfix mb-3">
            <span class="float-start badge rounded-pill bg-success">1.020$</span>
 
          </div>
          <h5 class="card-title">
            <a target="_blank" href="/"> </a>
          </h5>

          <div class="d-grid gap-2 ">

            <a href="/" class="btn btn-warning bold-btn">Buy now</a>

          </div>
         
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card card-shadows">
        <a href="/">
          <img src= "./image/arrival_4.jpg" class="card-img-top" alt="product.title" />
        </a>
        {/* <!-- <div class="label-top shadow-sm">Asus Rog</div>  --> */}
        {/* <div class="label-top shadow-sm">
          <a class="text-white" href="/">msi</a>
        </div> */}
        <div class="card-body">
          <div class="clearfix mb-3">
            <span class="float-start badge rounded-pill bg-success">2.245$</span>
 
          </div>
          <h5 class="card-title">
            <a target="_blank" href="/"> </a>
          </h5>

          <div class="d-grid gap-2">

            <a href="/" class="btn btn-warning bold-btn">Buy now</a>

          </div>
           
        </div>
      </div>
    </div>
  </div>
</div>

{/* <div class="small text-muted my-4">Images by <a target="_blank" href="https://www.amazon.com/">Amazon</a></div> */}
</section>

  {/* Top rated book section ends */}


 
                  {/* {{!-- Services sections --}} --> */}

                  <div class="container">
    <div class="row">
        <div class="col-lg-12 text-center">
            <h2 class="section-title">Services We Provide</h2>
        </div>
        <div class="col-lg-3 col-sm-6 mb-4">
            <div class="card border-0 shadow rounded-xs pt-5">
                <div class="card-body"> <i class="fa fa-object-ungroup icon-lg icon-primary icon-bg-primary icon-bg-circle mb-3"></i>
                    <h4 class="mt-4 mb-3">24 x 7</h4>
                    <p>For what reason would it be advisable for me to think about business content?</p>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-sm-6 mb-4">
            <div class="card border-0 shadow rounded-xs pt-5">
                <div class="card-body"> <i class="fa fa-users icon-lg icon-yellow icon-bg-yellow icon-bg-circle mb-3"></i>
                    <h4 class="mt-4 mb-3">Free Delivery</h4>
                    <p>For what reason would it be advisable for me to think about business content?</p>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-sm-6 mb-4">
            <div class="card border-0 shadow rounded-xs pt-5">
                <div class="card-body"> <i class="fa fa-receipt icon-lg icon-purple icon-bg-purple icon-bg-circle mb-3"></i>
                    <h4 class="mt-4 mb-3">Secure Payments</h4>
                    <p>For what reason would it be advisable for me to think about business content?</p>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-sm-6 mb-4">
            <div class="card border-0 shadow rounded-xs pt-5">
                <div class="card-body"> <i class="fa fa-cloud icon-lg icon-cyan icon-bg-cyan icon-bg-circle mb-3"></i>
                    <h4 class="mt-4 mb-3">Cloud Service</h4>
                    <p>For what reason would it be advisable for me to think about business content?</p>
                </div>
            </div>
        </div>
        
         
        
       
    </div>
</div>
        
{/* <!-- 
{{!-- Service section ends --}} */}

</section>

<About/>
<Contact/>
</>
  )
}

export default Home