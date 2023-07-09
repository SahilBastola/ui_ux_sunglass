import React from 'react'
import userService from '../../services/loginService'
import {useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Loginpage =() =>{
    const [name,setusername] = useState('teknath')
    const [password,setPassword] = useState('tek123')
    const navigate = useNavigate()

    const handleLogin= (e) => {
            e.preventDefault();
            userService.login({name,password}).then(res => {
                alert(res.data)
                window.localStorage.setItem(`token`,res.data.token)
                window.localStorage.setItem(`userid`,`${res.data._id}`)
                window.localStorage.setItem(`username`,name)
                alert("login Successfull")
                navigate("/")
            
            }).catch(err => console.log(err))
           
    }
    return (

        <section className="login-form py-3">
    
        <div class="container shadow-lg p-3  py-3 mb-2 rounded text-center reg">
           <div class="row ">
                <h1 class="text-center">Login now</h1>
                <div class="col-md-6 mt-6 ">
                        <h1 className='fst-italic mb-3'>Welcome to E-<span class="text-danger">Buy</span></h1>
                        <p className='text-success mb-3 fs-4'>Register now and get enroll to new tranding books in exclusive offers.</p>
                        <h3 className='mb-3'>Don't have account?</h3>
                        <a href="/Registerpage" class="btn btn-warning ms-2 fw-bold fs-5 mt-4 " type="submit">Register</a>
                   </div>
               <div class="col-md-6 mt-5 ">
                  
                   <div class="card  ">
                       <div class="card-body shadow-lg p-4  py-3  rounded ">
                           
                           <form onSubmit={handleLogin} method="POST"autocomplete="off">
                           <h3 className='mb-3'>Login Page</h3>
                           <div class="form-floating">
                               <input type="text" class="form-control" value={name} name="Fullname"   placeholder="Full Name" onChange={(e)=>{
                                setusername(e.target.value)
                               }}
                                    required/>
                               <label for="floatingInputGroup1">username</label>
                           </div>
                            
                           <div class="form-floating mt-3">
                               <input type="password" class="form-control" name="password" placeholder="password" value={password} 
                               onChange={(e)=>{
                                setPassword(e.target.value)}}
                               
                               required/>
                               <label for="floatingInputGroup1">password</label>
                           </div>
                            
                           <button type="submit" class="btn btn-success ms-2 fw-bold fs-5 mt-4 " onClick={handleLogin} >Login</button>
                           
                           </form>
      
                       </div>
      
                   </div>
                   </div>
      
                   
               </div>
           </div>
      
      </section>
    )
}
export default Loginpage