import axios from "axios"
export const baseUrl  = import.meta.env.BASE_URL
//'http://127.0.0.1:8000'//'http://localhost:605'
export interface iData{
  form:HTMLFormElement
  appends:Array<any>
  keys:Array<any>
  isJson:boolean
}


export  const makeRequest = async (url:string,data:iData,cb:any,mtd:string|null =null,headers_opt:object|null=null)=>{
      console.log(data)
            try {
              const form = typeof data.form !== 'undefined' ? new FormData(data.form) :new FormData()
              if (typeof data.appends !== 'undefined') {     
                data.appends.forEach( (a:string,i:any)=>{
                     if(typeof data.keys !== 'undefined'){
                        form.append(data.keys[i],a) 
                     }else{
                        form.append('post'+i,a) 
                     }
                    
                } )
              }
               
              const   header_setting  = headers_opt !==null ?headers_opt: { 
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                 // 'X-CSRF-TOKEN':document.querySelector("input[name='_token']").value,
                  'Authorization': 'Bearer '+localStorage.getItem(import.meta.env.ACCESSTOKEN),
                 'Access-Control-Allow-Origin':'*',
                
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
                const d  =  await axios(options)
                const out  = d.data
               
                 if(out.err){
                  return cb({message:out.err,isArr:typeof out.err=='object'?true:false},null,d)
                 }
                   cb(null,out,d)  
      
      
            } catch (error) {
              console.log(error)
              cb(error,null)
             
            }
      
      
          }
              
  