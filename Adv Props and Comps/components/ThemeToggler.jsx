import {createContext, useContext, useState} from 'react'
//  create theme context
const ThemeContext=createContext()

export function ThemeProvider({children}){
  const [theme,setTheme]=useState('dark')
  const toggleTheme=()=>{
    setTheme((prevTheme)=>(prevTheme==='dark'?'light':'dark'))
  }
  const value={
    theme,
    toggleTheme,
    isDark:theme==='dark'
  }
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme(){
  const context=useContext(ThemeContext);
  return context
}
function ThemeToggleButton(){
  const values=useTheme()
  return(
    <button onClick={values.toggleTheme}>{values.isDark?'Moon':'Sun'}</button>
  )
}
function ThemeCard({children}){
  const {isDark}=useTheme()
  return(
  <div className={`${isDark ?'bg-dark-600 text-white':'bg-white text-gray-800'}`}>
    <h3>{title}</h3>
    <h3>{heloo}</h3>
    <h3>{children}</h3>
  </div>
  )
}
function ThemeToggler() {
  return (
    <div>ThemeToggler</div>
  )
}

export default ThemeToggler