import { makeRequest } from "../../request"

export const login  = loginDetails=>{
  makeRequest('/api/v1/user/auth',loginDetails,(err,data)=>{
    if(err){
       console.log(err,"ER")
    }
    console.log(ata)  
  })

}

