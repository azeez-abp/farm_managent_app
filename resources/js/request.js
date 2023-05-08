import axios from "axios"
export const baseUrl  ='http://127.0.0.1:9000'//'http://localhost:605'

export  const makeRequest = async (url,data,cb,mtd=null,headers_opt=null)=>{
  
            try {
             var form = typeof data['form'] !== 'undefined' ? new FormData(data.form) :new FormData()
              if (typeof data.appends !== 'undefined') {     
                data.appends.forEach( (a,i)=>{
                     if(typeof data.keys !== 'undefined'){
                        form.append(data.keys[i],a) 
                     }else{
                        form.append('post'+i,a) 
                     }
                    
                } )
              }
               
              let   header_setting  = headers_opt !==null ?headers_opt: { 
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'X-CSRF-TOKEN':document.querySelector("input[name='_token']").value,
                  //'authorization': 'Bearer '+GetToken(),
              //  'Access-Control-Allow-Origin':'*'
                  "X-Requested-With": "XMLHttpRequest",
                 }
                    const options = {
                        method: mtd?mtd:'POST',
                        headers:header_setting,
                        
                        // body:  {userID:inp},
                         data: data.isJson?JSON.stringify(data):form,
                        url:baseUrl+ url,
                      };
       /*
       to pass json data
       1. your data must have prop isJson:true
       2. at backend   if(empty($_POST)){
	 	$_POST = json_decode(file_get_contents("php://input"),true);

	 }


	 }
       
       */
                let d  =  await axios(options)
               let out  = d.data
               
                 if(out.err){
                  return cb({message:out.err,isArr:typeof out.err=='object'?true:false},null,d)
                 }
                   cb(null,out,d)  
      
      
            } catch (error) {
              console.log(error)
              cb(error,null)
             
            }
      
      
          }
              
  