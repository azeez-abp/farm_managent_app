import {makeRequest} from '../../request'
import { randomStr2 } from '../../randomStr'
import { crypto } from '../../crypto/crypto'
var val  = ''
   
export const captchaRequest = (el)=>{
    let id =randomStr2(20,true,false)
  
   document.querySelector(".fa-refresh").classList.remove('refresh-captcha')
    document.querySelector('.fa-refresh').classList.add('rotate')
    document.querySelector('.fa-refresh').style.opacity  = '0.6'
    document.body.style.pointerEvents='none';// {pointerEvents:'none', cursor:'no-drop'}
    document.body.style.cursor='no-drop';
    makeRequest('/api/v1/captcha',{isJson:true,what:'capcha',id},(err,data)=>{
       
      function notifier(title,message,type){

        let htm  = `<div class="container notifier ${type==='s'?'suc_':'err_'} ">
        <h3 class="title_" >${title}</h3>
        <p>${message}</p>
    
      </div>`

     //let np   = Array.from(document.body.querySelectorAll(".notifier"))
    //  while(document.body.querySelectorAll(".notifier")){
    //   document.body.remove(document.body.querySelectorAll(".notifier"))
    //  }
      
       document.querySelector(".error").innerHTML  =htm
  


      }

      if(err){
       try {
        notifier('Request Error',JSON.stringify(err),'e')
       } catch (error) {
        console.log(error)
       }
      
         

      }
       
    if(data !== null){
        
        el.querySelector('.captch-box').innerHTML= ``
       
        setTimeout(()=>{ el.querySelector('.captch-box').innerHTML= `<img src="${data.captcha}" alt="CAPTCHA" class="captcha-image">`},300)
        document.querySelector('.fa-refresh').style.opacity  = '1'
        document.querySelector('.fa-refresh').classList.remove('rotate')
        let d_  = data.session
       //  
        //  try {
           let f   = crypto.encode([d_.join("")],"we#2@t",[3,1,2,0]); 
   
     
       //  
        document.querySelector("input[name='user']").setAttribute('data-login', JSON.stringify(f) )
        document.querySelector(".fa-refresh").classList.add('refresh-captcha')
        document.body.removeAttribute('style')
        //location.reload()
    }
  
}) 
}

 export const checkIsHuman =($this)=> {

      let capval  = JSON.parse(document.querySelector("input[data-login]").dataset.login)
    
     let val = crypto.decode(
        capval ,
     'we#2@t',
     [3,1,2,0]
     
     )
     


    if($this.value.length===6 ) {
        
          if($this.value === val){
        let but  = `<button type="button" class="login-button">
                <span class="fa fa-lock">

                </span>
                Sign in
            </button>`
            $this.style.outlineColor = 'white'
            document.querySelector('.submit-conatainer').innerHTML  = but
            document.querySelector(".div3").remove()
          }else{
            $this.style.outlineColor = 'red'
          }

      return
        
    }
    // else{
      $this.style.outlineColor = 'white'
     
    // }

}