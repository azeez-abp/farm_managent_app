
export const movePTagUp = (e:any)=>{//onclik of p tag <p> </p><input />
    e.target.classList.toggle('moveup')
    e.target.nextElementSibling.focus()
}

 export const movePTagDown  = (e:any)=>{//onblur of input page <p> </p><input />
 !e.target. value && e.target.previousElementSibling.classList.remove('moveup')
}
