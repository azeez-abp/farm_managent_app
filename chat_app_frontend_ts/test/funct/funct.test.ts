import objectFlip from "../../src/assets/theme";

test("It should chage key to value",()=>{
     const  obj  = {
        a:{
            300:"#889882"
        }
     }
    // console.log(Object.values(obj))
     const res  = objectFlip(obj)

     expect(res).toStrictEqual({"a": {"#889882": "300"}})

})