import './bootstrap';
import 'font-awesome/css/font-awesome.css'
import '@fortawesome/fontawesome-svg-core'
import { captchaRequest,checkIsHuman } from './logics/login/captcha';

window.addEventListener("load",function(){
   let ev  = new Event('click')
   document.querySelector('.refresh-captcha').click()//.dispatchEvent(ev)

})
document.querySelector(".elem-group-login").addEventListener("click",(ev)=>{
  console.log(this)
     let elementClasses  = Array.from (ev.target.classList);
     let parent  = ev.currentTarget
     ev.stopPropagation()
     ev.preventDefault()
     ev.stopImmediatePropagation()
    try {
      if(elementClasses.includes('refresh-captcha')){
        captchaRequest(parent)
      }
    } catch (error) {
        console.log(error,"THIS ERROR OCCURE")
    }
    
    //ev.target.classList.i
})

document.querySelector('#captcha').addEventListener('keyup',function(){
 checkIsHuman(this) 

})
