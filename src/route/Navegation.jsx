import React from 'react'
import {BrowserRouter, Routes,Route, NavLink, Navigate} from 'react-router-dom'
import {About} from '../componentes/About'
import {Dashboard} from '../componentes/Dashboard'
import {Header} from '../componentes/Header'
import {Home} from '../componentes/Home'

function Navegation() {
  return (
      <BrowserRouter>
      <nav> 
          <ul>
              <li>
                  <NavLink to='/About' className={({isActive})=> isActive ? 'nav-active' : ''}>
                  About
                  </NavLink>
              </li>
              <li>
                  <NavLink to='/Dashboard' className={({isActive})=> isActive ? 'nav-active' : ''}>
                  Dashboard
                  </NavLink>
              </li>
              <li>
                  <NavLink to='/Header' className={({isActive})=> isActive ? 'nav-active' : ''}>
                  Header
                  </NavLink>
              </li>
              <li>
                  <NavLink to='/Home' className={({isActive})=> isActive ? 'nav-active' : ''}>
                  Home
                  </NavLink>
              </li>
          </ul>
      </nav>
    
        <Routes>
          <Route path='About' element={<About/>}/>
          <Route path='Dashboard' element={<Dashboard/>}/>
          <Route path='Header' element={<Header/>}/>
          <Route path='Home' element={<Home/>}/>
          <Route path='/*' element={<Navigate to='/home/' replace/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export { Navegation}
