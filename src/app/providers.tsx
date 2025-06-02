"use client"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
export function Providers({children}:{children:React.ReactNode}){
    return(
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle/>
            {children}
        </ThemeProvider>
    )
}