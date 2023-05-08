import {ReactElement,ChangeEvent, useState, useRef, useEffect } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import { movePTagUp,movePTagDown } from '../../assets/movingPTags/movingPTags';
import { iData, makeRequest } from '../../assets/request';
const  Registration =  ():ReactElement => {  
    const userRef:React.MutableRefObject<any> = useRef();                                                       
    const [state,setState]  = useState({})
    const [error,setError] = useState('')
    let navigation = useNavigate()
    const [isLoading,setIslogin]  = useState(false)

  const getInputData  = (e:ChangeEvent<HTMLInputElement>)=>{
    const attr  = e.target.name
    const state2  = {...state,[attr]: e.target.value}
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
        if(!state.name){
          isValid += "Name is required:"
        }
        if(state.name && !state.name.match(/.+\W.+\W.+/)){
          isValid += "First name, last(farmily) name and other name is required in name field:"
        }
        if(!state.password){
          isValid += "Password is required:"
        }

        if(!state.repeat_password){
          isValid += "Reapeat Password is required:"
        }

        if( (state.repeat_password  ||  state.password)  && (state.repeat_password !== state.password) ){
          isValid += "Password and Reapeat Password   are not equall:"
        }


        if(!state.mobile_number){
          isValid += "Mobile number is required:"
        }

        if(!state.address){
          isValid += "Address is required:"
        }
        
         if(isValid!=='') return setError(isValid)
            setIslogin(true)
          makeRequest('/api/v1/user/register', {...state,isJson:true} as iData , (err:object,data:object)=>{
              if(err){
                 
                 setError(err.message)
               
                 return setIslogin(false)
              }
             
              console.log(data)
              setError('')
              return setIslogin(false)

          },'POST'  ) 

         console.log(state)
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
    <section className='register'>
        <header>
               {error ? (error.split(":").map((er,index)=> er&&<Alert key={index} severity="error">{er}</Alert>) ):<p>User Registration</p> }
        </header>

        <main>
          <div>
               <p style={{textAlign:"left"}} onClick={movePTagUp}>Name</p> 
               <input type='text' ref = {userRef} name='name' className='' onChange={getInputData} onBlur={movePTagDown}/>
           </div>
               
           <div>
               <p style={{textAlign:"left"}} onClick={movePTagUp}>Email</p>
               <input type='email' ref = {userRef} name='email' className='' onChange={getInputData} onBlur={movePTagDown}/>
           </div>

            <div>
            <p style={{textAlign:"left"}} onClick={movePTagUp}>Password</p>
                <input  type='password' name='password' className='' onChange={getInputData} onBlur={movePTagDown}/>
            </div>

            <div>
           <p style={{textAlign:"left"}} onClick={movePTagUp}>Repeat password</p>
               <input  type='password' name='repeat_password' className='' onChange={getInputData} onBlur={movePTagDown}/>
        
           </div>



            <div>
            <p style={{textAlign:"left"}} onClick={movePTagUp}>Mobile Number</p>
               <input  type='number' name='mobile_number' className='' onChange={getInputData} onBlur={movePTagDown}/>
           </div>



           <div>
           <p style={{textAlign:"left"}} onClick={movePTagUp}>Home Address</p>
               <input  type='text' name='address' className='' onChange={getInputData} onBlur={movePTagDown}/>

        
           </div>


              
        
           <div>
            
               <div className='btn-submit' style={{margin:"10px auto"}}>
                 <button type='button' name='submit' onClick={submit}>Submit
        
                   {isLoading&&<CircularProgress style={{width:'15px',height:'15px', margin:' 0 20px'}}/> }
                   
          
                 </button>
               </div>
              
           </div>
            

           <div>
          
               <Link to="/" >Login</Link>
           </div>

        </main>

        <footer>

        </footer>
    </section>
  )
}

export  default Registration;