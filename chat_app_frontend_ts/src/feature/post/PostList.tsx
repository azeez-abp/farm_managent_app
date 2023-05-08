import Reeact,{Component,useEffect} from 'react'
import { connect, useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { getData, post_ } from './postSlice';


const PostList =  () => {
  const data   = useSelector((state)=>{
    return state.postSlice
  })  
  const trigger  = useDispatch()
 
  const  state = {  }
  useEffect(() => {
  trigger(post_)
 
    return () => null
  }, [])
  
 
        return (
            <section>
              {/* {JSON.stringify(data)} */}
            </section>
        );
 }

export default PostList;