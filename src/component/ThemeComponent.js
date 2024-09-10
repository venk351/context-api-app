import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function ThemeComponent(){
    const {theme, toggleTheme} = useContext(ThemeContext)
    return (
        <div>
            <p>Current Theme{theme}</p>
            <button onClick={toggleTheme}>ChangeTheme</button>
        </div>
    )
}