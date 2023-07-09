 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Header from "./Components/Layouts/Header";
import Home from "./Components/Home/Home";
import Product from "./Components/Products/Products";
import ShoopingCart from "./Components/Products/ShoopingCart";
import Registerpage from "./Components/Auth/Registerpage";
import AdminUserPage from "./Components/AdminPage/Adminuserpage";
import AdminDashboard from "./Components/AdminPage/Admindahboard"
import AdminproductPage from "./Components/AdminPage/Adminproductpage";
import AdminOrderPage from "./Components/AdminPage/Adminorderpage";
import EditProductPage from "./Components/AdminPage/Editprofilepage";
import Loginpage from "./Components/Auth/Loginpage";
import ProductDetailPage from "./Components/Products/Productdetail";
import ProfilePage from "./Components/Home/profile";
// import Item from "./DangerZone/Item";
// import Cart from "./demo/Cart";
 
import "./Style/Product.css";
import "./Style/Main.css";
 
 
function App() {
  return (
    <Router>
<Header/>
<Routes>
  <Route path="/" element={<Home/>}/>
 
  <Route path="/Product" element ={<Product/>}/>
  <Route path="/Loginpage" element ={<Loginpage/>}/>
  <Route path="/Registerpage" element ={<Registerpage/>}/>
  <Route path="/ShoopingCart" element={<ShoopingCart/>}/>
  <Route path="/ProductDetail/:id" element={<ProductDetailPage/>}/>
  <Route path="/profilePage" element={<ProfilePage/>}/>
  <Route path="/AdminDashboard" element={<AdminDashboard/>}/>
      <Route path="/AdminorderPage" element={<AdminOrderPage/>}/>
      <Route path="/AdminuserPage" element={<AdminUserPage/>}/>
      <Route path="/AdminproductPage" element={<AdminproductPage/>}/>
      <Route path="/EditProductPage/:id" element={<EditProductPage/>}/>

 
  
</Routes>
{/* <Footer/> */}
</Router>
  );
}

export default App;
