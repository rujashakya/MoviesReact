import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-primary-subtle py-2 d-flex justify-content-between px-5'>
        
    <div className='w-50 d-flex justify-content-evenly'>   
          
        <Link to='/home' > Home</Link> 
        <Link to='/movies'> Movies</Link> 
        <Link to='/series'> Series</Link> 
    </div>

    <div className='w-25 d-flex justify-content-evenly'>
        <Link to='/Login'>Login</Link>
        <Link to='/register'>Register</Link>
    </div>
    </div>
         
  )
}

export default Header
