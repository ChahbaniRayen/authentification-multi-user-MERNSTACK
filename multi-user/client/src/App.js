import './App.css';
import * as React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './page/Profile';
import Login from './page/Login';
import Register from './page/Register';
import Admin from './page/Admin';
import Navbar from '../src/components/Navbar'; 
import NotFound from './page/NotFound';
import Access from './page/Access';
import PrivateRouter from './components/PrivateRouter'; 
import AdminRouter from './components/AdminRouter'; 
import ForceRedirect from './components/ForceRedirect';
import store from './components/Redux/Store';
import { jwtDecode } from 'jwt-decode'; 
import { setUser } from './components/actions/authActions';
import { useSelector } from 'react-redux';
import { setAuth } from './utile/setAuth';

if (window.localStorage.jwt){   
  const decode = jwtDecode(localStorage.jwt);
  store.dispatch(setUser(decode)); 
  setAuth(window.localStorage.jwt)
}

function App() {  
  const auth = useSelector(state=>state.auth)
  const user={
    isConnected:auth.isConnected, 
    role:auth.user.role

  }
  return (
    <BrowserRouter > 
        <div className="bg-light" style={{ height: "100vh" }}>
        <Navbar user={user}/>

      <Routes> 

        <Route path="/" element={
          <PrivateRouter user={user}> 
            <Profile />
          </PrivateRouter>
        } />
        <Route path="/login" element={
          <ForceRedirect user={user} >
            <Login />
          </ForceRedirect>} />
        <Route path="/register" element={
          <ForceRedirect  user={user} >
            <Register />
          </ForceRedirect>}  />
        <Route path="/admin" element={
           <AdminRouter user={user}> 
           <Admin />
         </AdminRouter>
        } /> 
        <Route path="/*" element={<NotFound />} />
        <Route path="/NoAccess" element={<Access />} />

      </Routes> 
      </div>
    </BrowserRouter>
  );
}

export default App;
