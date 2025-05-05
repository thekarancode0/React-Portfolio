import React, { createContext, useState } from 'react'
export const ThemeContext = createContext()

const ThemeContextProvider=({children})=> {
    const[theme,setTheme] = useState(false);
    console.log(theme)
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default  ThemeContextProvider