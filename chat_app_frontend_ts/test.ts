function objectReverseKey(colorObject:object):object{
    let flipForm:object  = {}  
  for(  let eachObjKey in colorObject ){
        
          let eachFlip  = {}
          console.log()
        let objKey : string[]=  Object.keys(colorObject[eachObjKey]).reverse()
        let objValue=  Object.values(colorObject[eachObjKey])
          
        // const keys = [2, 3];
        // const values = ["d", "sasd"];

            eachFlip  = objKey.reduce((acc, curr, index) => {
            acc[curr] = objValue[index];
            return acc;
            }, {});

        
        console.log(eachFlip,objKey ,objValue)
        flipForm  = {...flipForm, [eachObjKey]:{...eachFlip} }

  }
  return flipForm
  
 
}

let ce = {
    d:{
        2:"4",
        4:"32ew",
        5:"32321"
    },
    e:{
        4:'444'
    }
}
console.log(objectReverseKey(ce))