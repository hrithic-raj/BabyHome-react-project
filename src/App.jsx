import './App.css';
import { Route, Routes } from 'react-router-dom';
import Signup from './pages/Auth/Signup';
import Login from './pages/Auth/Login';
import Home from './pages/home/Home';
// import MyNavbar from './components/MyNavbar';
// import MyFooter from './components/MyFooter';
import Product from './pages/Stores/Product';
import Store from './pages/Stores/Store';
import Profile from './pages/profile/Profile';
import About from './pages/other/About';
import ContactUs from './pages/other/ContactUs';
import Cart from './pages/Stores/Cart';
import Payment from './pages/Stores/Payment';
import Orders from './pages/profile/Orders';
import Wishlist from './pages/profile/Wishlist';
import Donation from './pages/other/Donation';
import PrivacyPolicy from './pages/other/PrivacyPolicy';
import ShippingAndReturns from './pages/other/ShippingReturn';
import TermsAndConditions from './pages/other/TermsConditions';
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import AdminProduct from './pages/Admin/Products/AdminProduct';
import AdminUser from './pages/Admin/Users/AdminUser';
import Adduser from './pages/Admin/Users/AddUser';
import AddProduct from './pages/Admin/Products/AddProduct';
import EditProduct from './pages/Admin/Products/EditProduct';
import ProductView from './pages/Admin/Products/ProductView';
import UserView from './pages/Admin/Users/UserView';
import AdminOrder from './pages/Admin/Orders/AdminOrder';
import PageNotFound from './pages/other/PageNotFound';
  
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/store'>
          <Route path='/store' element={<Store/>}/>
          <Route path='/store/product/:productId' element={<Product/>}/>
        </Route>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/donation' element={<Donation/>}/>
        <Route path='/pp' element={<PrivacyPolicy/>}/>
        <Route path='/sr' element={<ShippingAndReturns/>}/>
        <Route path='/tc' element={<TermsAndConditions/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/store/:category' element={<Store/>}/>
        <Route path='/admin'>
          <Route path='/admin' element={<Dashboard/>}/>
          <Route path='/admin/products' element={<AdminProduct/>}/>
          <Route path='/admin/users' element={<AdminUser/>}/>
          <Route path='/admin/orders' element={<AdminOrder/>}/>
          <Route path='/admin/users/adduser' element={<Adduser/>}/>
          <Route path='/admin/products/addproduct' element={<AddProduct/>}/>
          <Route path='/admin/products/:category' element={<AdminProduct/>}/>
          <Route path='/admin/products/editproduct/:productId' element={<AdminProduct/>}/>
          <Route path='/admin/products/product/:productId' element={<ProductView/>}/>
          <Route path='/admin/users/user/:userId' element={<UserView/>}/>
        </Route>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
