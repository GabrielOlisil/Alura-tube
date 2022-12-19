import React, { useState } from "react";
export const ColorModeContext = React.createContext({
    mode: "",
    setMode: () => {alert("Não configurado")},
    toggleMode: () => {alert("Não configurado")}
})
export default function ColorModeProvider({children, initialMode}){
    const [mode, setMode] = useState(initialMode);
    function toggleMode(){

        mode == "dark" && setMode("light");
        mode == "light" && setMode("dark");
    }
    return (
        <ColorModeContext.Provider value={{mode, setMode, toggleMode}}>

            {children}
        </ColorModeContext.Provider>
    )
}