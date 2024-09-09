import './App.css';
import { Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import Product from './pages/Product';
import Store from './pages/Stores/Store';
import Profile from './pages/Profile';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/' element={<Signup/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/store' >
          <Route path='/store' element={<Store/>}/>
          <Route path='/store/product/:id' element={<Product/>}/>
        </Route>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/store/:category' element={<Store/>}/>
      </Routes>
    </div>
  );
}

export default App;
