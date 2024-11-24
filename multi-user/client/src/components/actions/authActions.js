import axios from 'axios';  
import{ ERRORS, SET_USER }from '../Redux/type'; 
import { jwtDecode } from 'jwt-decode';
import { setAuth } from '../../utile/setAuth';

export const Registration=(form,navigate)=>dispatch => {


 axios.post('http://localhost:3600/api/register',form)
 .then(
    res=> { 
      navigate('/login'); 
      dispatch({ 
        type:ERRORS, 
        payload:{}
    })

    }
 )
.catch(err=> 


    {
        dispatch({ 
            type:ERRORS, 
            payload:err?.response?.data
        })
    }
   
)
}

export const LoginAction=(form,navigate)=>dispatch => {


 axios.post('http://localhost:3600/api/login',form)
 .then(
    res=> {  
        const{token}=res.data;  
        localStorage.setItem('jwt', token);
        const decode=jwtDecode(token);
         dispatch(setUser(decode));
         setAuth(token);
          
        
          
    })
 
.catch(err=> 


    {
        console.log(err?.response?.data || err,"error")
        dispatch({ 
            type:ERRORS, 
            payload:err?.response?.data
        })
    }
   
)
} 

export const setUser= (decode)=> ({ 
    type:SET_USER,  
    payload:decode
  
})  



export const Logout=  ()=> dispatch=>{  
    localStorage.removeItem('jwt');  
    dispatch(
        {
            type: SET_USER,
            payload: {}
        } 
    )  

}