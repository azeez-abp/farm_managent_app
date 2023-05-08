import {ReactElement,ChangeEvent, useState, useRef, useEffect, MouseEventHandler } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCredentials } from './authSlice'
import { useLoginMutation } from './authApiSlice'
//import { Alert } from '@mui/material'
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';

import { movePTagDown,movePTagUp } from '../../assets/movingPTags/movingPTags'

const  Login =  ():ReactElement => {  
    const userRef:React.MutableRefObject<any> = useRef();                                                       
    const [state,setState]  = useState({remember:false})
    const [error,setError] = useState('')
    console.log(useLoginMutation())
    const [login,{isLoading}] = useLoginMutation()//createApi().injectEndPoint()
    const dispatch  = useDispatch()

   //type NavigationType = typeof useNavigate;
    const navigation = useNavigate()
  const getInputData  = (e:ChangeEvent<HTMLInputElement>)=>{
    console.log(e.target.name,typeof useNavigate)

    console.log(e.target.value, e.target.type)
    const attr  = e.target.name
    let state2  = {...state,[attr]: e.target.value}
   if(e.target.type ==='checkbox'){
    state2  = {...state,[attr]: !state.remember}
   }
    setState(state2)
  }

 useEffect(()=>{
  setError('')//set error to '' if the state objecge change
 },[state])

 useEffect(()=>{
   userRef.current.focus();
 },[])


  const submit   = async(ev:any)=>{
    ev.preventDefault()
    try {
        let isValid   = '';
        if(!state.email){
          isValid += "Email is required:"
        }
        if(!state.password){
          isValid += "Password is required:"
        }
        
         if(isValid!=='') return setError(isValid)

          const userData  = await login(state).unwrap()
         dispatch(setCredentials({...userData,state}))
       //   setState({remember:false})
          navigation('/Welcome')
    } catch (error:any) {
      console.log(error)
        if(error?.status === 422){
          console.log(error)
            let  error_  = "";
               for(const e in error.data.errors){
                  
                   error_ += error.data.errors[e][0]+":"
               }
             //  console.log(error_ )
          setError(error_)
        }else if(error.originalStatus === 400){
          setError("Missing User Credentials")
        } 
        else if(error.status === 401){
          setError(error.data.message+". Unauthorized")
        } else{
          setError("Login failed")
        }

    }
    console.log(state)
  }

  const checkThroughPTag  = (e:any)=>{
    e.target.children[0]?.click()
   
  }



  return (
    <section className='login'>
        <header>
               {error ? (error.split(":").map((er,index)=> er&&<Alert key={index} severity="error">{er}</Alert>) ):<p>User Login</p> }
        </header>

        <main>
               
           <div>
             <p onClick={movePTagUp}>Email</p>
               <input type='email' ref = {userRef} name='email' className='' onChange={getInputData} onBlur={movePTagDown}/>
           </div>

           <div>
           <p onClick={movePTagUp}>Password</p>
               <input type='password' name='password' className='' onChange={getInputData} onBlur={movePTagDown}/>

               <p onClick={checkThroughPTag} className='remember'>
                 <input type='checkbox' name='remember' className=''  checked={state.remember}  onChange={getInputData} />
               Remember me</p>
           </div>
            
        
           <div>
            
               <div className='btn-submit'>
                 <button type='button' name='submit' onClick={submit}>Submit
        
                   {isLoading&&<CircularProgress style={{width:'15px',height:'15px', margin:' 0 20px'}}/> }
                   
          
                 </button>
               </div>
              
           </div>
            

           <div>
          
               <Link to="/user/register" >Register</Link>
           </div>

        </main>

        <footer>

        </footer>
    </section>
  )
}

export  default Login;