/////////////////////////Action types
export const USER_REQUEST = 'USER_REQUEST'
export const USER_SUCCESS = 'USER_SUCCESS'
export const USER_FAILURE = 'USER_FAILURE'

export const STARGAZERS_REQUEST = 'STARGAZERS_REQUEST'
export const STARGAZERS_SUCCESS = 'STARGAZERS_SUCCESS'
export const STARGAZERS_FAILURE = 'STARGAZERS_FAILURE'
/////////////////////////Action types


/////////////////////////Action factory function
export const loadStargazers = (fullName, nextPage) => (dispatch, getState) => {

  console.log(getState())
 
  return dispatch({state:USER_SUCCESS,payload:{admin:"Admin",user:fullName,done:nextPage}})
}