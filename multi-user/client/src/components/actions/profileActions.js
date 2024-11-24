import axios from "axios"
import { ERRORS, SET_PROFILE, SET_PROFILES } from "../Redux/type"

export const addProfile=(form,setMessage,setShow )=>dispatch=> { 
    axios 
    .post("http://localhost:3600/api/profiles",form)
    .then (res=> {
        setShow(true)  ; 
        setMessage("UPdated Successfully") 
        dispatch({
            type: SET_PROFILE,
            payload: res.data,
          });
          setTimeout(()=>{
            setShow(false)
            
          },4000)

    }

    )
    .catch(err=> { 
        dispatch({ 
            type:ERRORS, 
            payload:err?.response?.data
        })
    }
    )
} 

export const GetProfile=()=>dispatch=> { 
    axios 
    .get("http://localhost:3600/api/profile")
    .then (res=> {  
        
     dispatch( {type : SET_PROFILE ,
         payload : res?.data
         })
    }

    )
    .catch(err=> { 
        dispatch({ 
            type:ERRORS, 
            payload:err?.response?.data
        })
    }
    )
} 


export const GetProfiles=()=>dispatch=> { 
    axios 
    .get("http://localhost:3600/api/profiles")
    .then (res=> {  
        
     dispatch( {type : SET_PROFILES ,
         payload : res?.data
         })
    }

    )
    .catch(err=> { 
        dispatch({ 
            type:ERRORS, 
            payload:err?.response?.data
        })
    }
    )
}