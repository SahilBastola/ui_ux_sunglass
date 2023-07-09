import React,{ useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
 
const Registerpage = () =>{
    const [name, setusername] = useState("");
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    const [Confirmpassword, setConfirmpassword] = useState("");
    const [message, setMessage] = useState("");
    const [valid, setvalid] = useState("");
    const navigate = useNavigate();
  
    const HandleRegister = (e) => {
      console.log("regitsered");
      axios
        .post("http://localhost:4000/api/user/registeruser", {
          name,
          password,
          email,
        })
        .then((response) => {
          window.alert(response.data.status);
          alert("Register Suncessfull")
          navigate("/Loginpage");
        })
        .catch((err) => console.log(err));
  
      useEffect(() => {
        if (password !== Confirmpassword) {
          setMessage("Password doesnt match");
          setvalid("is-invalid");
          return;
        }
        setMessage("password matched");
        setvalid("is-valid");
      }, [Confirmpassword]);
    };
    return (
<>
<section className="register-form py-3">
    
    <div class="container shadow-lg p-3  py-3 mb-2 rounded text-center reg">
       <div class="row ">
            <h1 class="text-center">Register now</h1>
            <div class="col-md-6 mt-5 ">
                    <h1 className='fst-italic mb-3'>Welcome to E-<span class="text-danger">Buy</span></h1>
                    <p className='text-success mb-3 fs-4'>Register now and get enroll to new tranding books in exclusive offers.</p>
                    <h3 className='mb-3'>Already have account?</h3>
                    <a href="/Loginpage" class="btn btn-warning ms-2 fw-bold fs-5 mt-4 " type="submit">Login</a>
               </div>
           <div class="col-md-6 mt-5 ">
              
               <div class="card  ">
                   <div class="card-body bg-dark shadow-lg p-3  py-3  rounded ">
                       
                       <form onSubmit={HandleRegister} autocomplete="off">
  
                       <div class="form-floating">
                           <input type="text" class="form-control" name="fullname"   placeholder="Full Name"
                            value={name}
                            onChange={(e) => setusername(e.target.value)}
                                required/>
                           <label for="floatingInputGroup1">username</label>
                       </div>
                       <div class="form-floating mt-3">
                           <input type="text" class="form-control" name="email" placeholder="Email"
                               value={email}
                               onChange={(e) => setemail(e.target.value)}
                           required/>
                           <label for="floatingInputGroup1">Email</label>
                       </div>
                       <div class="form-floating mt-3">
                           <input type="password" class="form-control" name="password" placeholder="password"
                             value={password}
                             onChange={(e) => setPassword(e.target.value)}
                              required/>
                           <label for="floatingInputGroup1">password</label>
                       </div>   
                    <a
                      class="btn btn-info ms-4  mt-4 fw-bold fs-5 "
                      type="submit"
                      onClick={HandleRegister}
                    >
                      Login
                    </a>
                 
                       
                       </form>
  
                   </div>
  
               </div>
               </div>
  
               
           </div>
       </div>
  
  </section>
  </>

    )
}
export default Registerpage