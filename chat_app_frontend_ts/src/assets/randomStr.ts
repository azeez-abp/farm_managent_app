export const randomStr =  (length:number,include_spacial_char=false,random_lenght=false,number_only=false):string=> {
    /**
     * Math.random()*length+length generate random str minimum value is +legth max is lenght+length
     * @return string
    */
    length  = random_lenght? Math.floor(Math.random()*length+length) :length;
     let result           = ''
     const spacials  = '@$&#*!%'
     const characters       =number_only? (`0123456789`): (`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789${include_spacial_char?spacials:''}`);
     const charactersLength = characters.length;
     let i : number;
     for (i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * 
  charactersLength));
    }
    return result;
 }
 