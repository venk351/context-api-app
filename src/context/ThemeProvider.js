import React from "react";
import ThemeContext from "./ThemeContext";
import {useState} from "react";

export default function ThemeProvider({children}){

    const [theme, setTheme] = useState("Light");

    const toggleTheme = ()=>{
        setTheme((prevTheme)=>(
            prevTheme==="Dark"? "Light": "Dark"
        ))
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

