
interface iColor {
 indigo:object
 dark:object
 red:object
 green:object
 black:object
 teal:object
 yellow:object

}

export const color:iColor  = {
    indigo: {
        100: "#e0e0e0",
        200: "#c2c2c2",
        300: "#a3a3a3",
        400: "#858585",
        500: "#666666",
        600: "#525252",
        700: "#3d3d3d",
        800: "#292929",
        900: "#141414"
    },
    dark: {
        100: "#d6d6d6",
        200: "#adadad",
        300: "#858585",
        400: "#5c5c5c",
        500: "#333333",
        600: "#292929",
        700: "#1f1f1f",
        800: "#141414",
        900: "#0a0a0a"
    },
    
    red: {
        100: "#ffcccc",
        200: "#ff9999",
        300: "#ff6666",
        400: "#ff3333",
        500: "#ff0000",
        600: "#cc0000",
        700: "#990000",
        800: "#660000",
        900: "#330000"
},

green: {
    100: "#ccffcc",
    200: "#99ff99",
    300: "#66ff66",
    400: "#33ff33",
    500: "#00ff00",
    600: "#00cc00",
    700: "#009900",
    800: "#006600",
    900: "#003300"
},
black: {
    100: "#cccccc",
    200: "#999999",
    300: "#666666",
    400: "#333333",
    500: "#000000",
    600: "#000000",
    700: "#000000",
    800: "#000000",
    900: "#000000"
},
teal: {
    100: "#d3f6fc",
    200: "#a7edf8",
    300: "#7ae5f5",
    400: "#4edcf1",
    500: "#22d3ee",
    600: "#1ba9be",
    700: "#147f8f",
    800: "#0e545f",
    900: "#072a30"
},
yellow: {
    100: "#f6f6f8",
    200: "#edeef2",
    300: "#e5e5eb",
    400: "#dcdde5",
    500: "#d3d4de",
    600: "#a9aab2",
    700: "#7f7f85",
    800: "#545559",
    900: "#2a2a2c"
},
}
/**
 * a function that change the key to value in an object of object
*/
 function objectFlip(colorObject:any):object{
    let flipForm:object  = {}  
    let eachObjKey :any
  for(  eachObjKey in colorObject ){
      
          let eachFlip  = {}
          let key:any;
        for (key in colorObject[eachObjKey] ){
              eachFlip  = {...eachFlip,[colorObject[eachObjKey][key]]:key}

        }
       // console.log(eachFlip )
        flipForm  = {...flipForm, [eachObjKey]:{...eachFlip} }

  }
  return flipForm
  
 
}



function objectReverseKey(colorObject:object):object{
    let flipForm:object  = {}  
  for(  const eachObjKey in colorObject ){
          let eachFlip  = {}
          console.log()
        const objKey : string[]=  Object.keys( (colorObject as any) [eachObjKey]).reverse()
         const objValue=  Object.values( (colorObject as any)[eachObjKey])
        
            eachFlip  = objKey.reduce((acc, curr, index) => {
            ( acc as any) [curr] = objValue[index];
            return acc;
            }, {});

        
    //    console.log(eachFlip,objKey ,objValue)
        flipForm  = {...flipForm, [eachObjKey]:{...eachFlip} }

  }
  return flipForm
  
 
}

//write the color #00000, select it press ctrlk anmd ctrl g

export default objectFlip;

export const flipColors  = objectFlip(color)
export const  colorReverseKey  = objectReverseKey(color)

export const themeSetting  = (mode:string):object =>{
    return {
     palette :{
        mode : mode, ...(mode === 'dark'? {
             primary:{
                ... (colorReverseKey as iColor).dark,
                main: ( ((colorReverseKey as iColor).dark) as any ) [400],
                light: ( ((colorReverseKey as iColor).dark) as any ) [400]

             },
             secondary:{
                ... (colorReverseKey as iColor).dark,
                main: ( ((colorReverseKey as iColor).dark) as any ) [400],
                light: ( ((colorReverseKey as iColor).dark) as any ) [400]

             }
        }:
        
        {
            primary:{
                ... (colorReverseKey as iColor).dark,
                main: ( ((colorReverseKey as iColor).dark) as any ) [40],
                light: ( ((colorReverseKey as iColor).dark) as any ) [100]

             },
             secondary:{
                ... (colorReverseKey as iColor).dark,
                main: ( ((colorReverseKey as iColor).dark) as any ) [600],
                light: ( ((colorReverseKey as iColor).dark) as any ) [700]

             }
             ,
            neutral:{
                ... (colorReverseKey as iColor).dark,
                main: ( ((colorReverseKey as iColor).dark) as any ) [500],
               // light: ( ((colorReverseKey as iColor).dark) as any ) [700]

             }
             ,
            background:{
                ... (colorReverseKey as iColor).dark,
                main: ( ((colorReverseKey as iColor).dark) as any ) [0],
                light: ( ((colorReverseKey as iColor).dark) as any ) [50]

             
        }
        }
        )

     } 

}
}