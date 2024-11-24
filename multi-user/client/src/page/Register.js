import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import Inputs from '../components/Inputs';
import { useDispatch ,useSelector} from 'react-redux';
import { Registration } from '../components/actions/authActions';

function Register() {


  
  const reduxErrors=useSelector(state=>state?.errors);


  const [form,setForm]=useState({})
  const dispatch = useDispatch() 
  const navigate =useNavigate()
  const onChangeHandel = (e) => { 
    setForm({ 
      ...form, 
      [e.target.name]:e.target.value
    })
  } 

  console.log(form,"form data")
  const onSubmit = (e)=> {  
    e.preventDefault(); 
    dispatch(Registration(form,navigate))  }
  return (
      
      <div className="container p-4 mt-4">
        <div className="row justify-content-evenly mt-4">
          <div className="col-lg-6 col-md-12 mt-4">
            <div className="d-flex">
              <i className="fa-solid fa-right-to-bracket fs-1 mx-2"></i> <h2>Register</h2>
            </div>
            <div className="p-6 shadow-lg p-3 mb-5 bg-body rounded" style={{ backgroundColor: "white" }}>
              <form onSubmit={onSubmit}>
               <Inputs name="name" label="Name" type="text" icon="fa-solid fa-user" onChangeHandel={onChangeHandel}/>
               {reduxErrors?.name && <div style={{color:"red"}}>{reduxErrors?.name}</div>}

               <Inputs name="email" label="Email" type="text" icon="fa-solid fa-at" onChangeHandel={onChangeHandel}/>
               {reduxErrors?.email && <div style={{color:"red"}}>{reduxErrors?.email}</div>}

               <Inputs name="password" label="Password" type="password" icon="fa-solid fa-user" onChangeHandel={onChangeHandel} />
               {reduxErrors?.password && <div style={{color:"red"}}>{reduxErrors?.password}</div>}

               <Inputs name="confirm" label="Confirm Password" type="password" icon="fa-solid fa-user" onChangeHandel={onChangeHandel}/>
               {reduxErrors?.confirm && <div style={{color:"red"}}>{reduxErrors?.confirm}</div>}


 
                <div className="d-flex justify-content-between">
                  <button type="submit" className="btn btn-outline-primary">Save <i className="fa-solid fa-floppy-disk"></i></button>
                  <Link to="/login">I have an account</Link>
                </div> 
                
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Register;
