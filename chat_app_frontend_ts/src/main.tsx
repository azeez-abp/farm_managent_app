import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Provider} from 'react-redux'
import {store} from './app/store'
import { BrowserRouter,Routes ,Route} from 'react-router-dom'
import Layout from './feature/layout/Layout'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
         <Routes>
            {/* <Route path="/" element ={<Layout />} >  */}

            <Route path="/*" element ={<App />} />


            {/* </Route> */}
         </Routes> 
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
,
)
