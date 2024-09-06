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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/' element={<Signup/>}/>
        <Route path='/store' >
          <Route path='/store' element={<Store/>}/>
          <Route path='/store/product/:id' element={<Product/>}/>
        </Route>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/store/:category' element={<Store/>}/>
      </Routes>
    </div>
  );
}

export default App;
