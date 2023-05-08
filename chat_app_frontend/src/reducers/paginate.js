//import union from 'lodash/union'

// Creates a reducer managing pagination, given the action types to handle,
// and a function telling how to extract the key from an action.
const paginate = (state={},action) => {
   switch (action.type){
    case "LOADING":
        return {...state,data:action.payload}
   }
}

export default paginate
