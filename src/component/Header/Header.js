import React from 'react'
import  './Header.css'


const Header = () => {
    return (
        <>
            <div className="header-left">
              
                 <a href="" className="img1">
                     <img src="dashboard.svg" alt="" className='image'  height="30" width="30"/>
                     <span>Dashboard</span>
                 </a>
                
              
                
            </div>
            <div className='header'>
                <h3>COVID-19 TRACKER</h3>
            </div>
        </>    
    )
}



export default Header
