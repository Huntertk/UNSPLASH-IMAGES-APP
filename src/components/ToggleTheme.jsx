import React from 'react'
import { useAppContext } from '../context/AppContext'
import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs'

const ToggleTheme = () => {
    const {isDarkTheme, toggleDarkTheme} = useAppContext()
  return (
    <section className='toggle-container'>
        <button className='dark-toggle' onClick={toggleDarkTheme}>
            {
                isDarkTheme ?
                <BsFillSunFill className='toggle-icon' />   
                :
                <BsFillMoonFill className='toggle-icon' /> 
            }
            
        </button>
    </section>
  )
}

export default ToggleTheme