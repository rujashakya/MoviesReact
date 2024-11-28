import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './component/layout/layout'
import Home from './Pages/Home'

const MyRoutes = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}>
            
            
            </Route>
            
            
            
            </Route>
        </Routes>
    </BrowserRouter>
    </> 
     )
}

export default MyRoutes