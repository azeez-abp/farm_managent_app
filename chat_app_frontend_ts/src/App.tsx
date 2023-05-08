import { useState,Fragment,useMemo,useRef,useLayoutEffect  } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useAppSelector,AppUseDispatch } from './app/hooks'
import { increamental } from './feature/counter/counter-slice'
import { useDispatch } from 'react-redux'
import { Routes ,Route} from 'react-router-dom'
import { themeSetting } from './assets/theme'
import PostList from './feature/post/PostList'
import  Login from './feature/auth/Login'
import { setMode } from './feature/global/globalSlice'
import { CssBaseline,ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import Registration from './feature/registration/Registration'

function App(){
  const [count, setCount] = useState(0)
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  // useLayoutEffect(() => {
  //   setHeight(ref.current.offsetHeight);
  // }, []);

  const value  = useAppSelector((state)=>{
    return state.counter.value
  })

  const themeMode = useAppSelector((state)=>{
    return state.globalSlice.mode
  })
  
  const theme_  = useMemo(()=>createTheme(themeSetting(themeMode)),[themeMode] )
  
  const themeTrigger  = useDispatch()
   
  const handlechangeMode  = ()=>{

    themeTrigger(setMode())
  }
  
  
  const dispatch   = AppUseDispatch()                                                                                                                                                                                                                                                                                                                                                                               
  const trigger  =  useDispatch()
  const handleClick  = ()=>{
    dispatch(increamental())
  }

  const handleClick2  = ()=>{
  trigger(increamental())
  }

  return (
    <Fragment>
     
     
      <PostList />
      <Routes>
         <Route path="/" element  = {<Login />}  /> 
         <Route path="/user/register" element  = {<Registration />}  /> 
      </Routes>

         <ThemeProvider theme={theme_ }>
            <CssBaseline />
            {/* <div ref={ref}>
              <p>The height of this element is {height}px.</p>
            </div> */}
         </ThemeProvider>
     


     
 
    </Fragment >
  )
}

export default App
