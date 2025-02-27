
import { createContext, useState, useEffect } from 'react'

export const AccessibilityContext = createContext()

export const AccessibilityProvider = ({ children }) => {
    const [scale, setscale] = useState(localStorage.getItem('scale') || 'Medium')
    const [LineHieght, setLinehight] = useState(localStorage.getItem('LineHieght') || false);
    const [Wordspacing, setWordspacing] = useState(localStorage.getItem('Wordspacing') || false);
    const [contrastMode, setContrastMode] = useState(localStorage.getItem('contrastMode') || false);
    /*     const [darkMode,setDarkMode]=useState(localStorage.getItem('darkMode') || false); */

    useEffect(() => {
        const root = document.documentElement
        /* font size */
        root.style.zoom =
            scale === 'Medium' ? '1' :
                scale === 'Large' ? '1.1' :
                    scale === 'Very Large' ? '1.2' : '1'
        localStorage.setItem('scale', scale);

        /*word spacing */
        root.style.wordSpacing = Wordspacing ? '10px' : 'normal'
        localStorage.setItem('Wordspacing', Wordspacing);

        /*line hieght */
        root.style.lineHeight = LineHieght ? '2' : '1.5'
        localStorage.setItem('LineHieght', LineHieght);

        /*contrast */
        root.style.filter = contrastMode ? 'contrast(110%)' : 'contrast(1)'
        localStorage.setItem('contrastMode', contrastMode);

        /*localStorage.setItem('darkMode', darkMode); */

    }, [scale, LineHieght, Wordspacing, contrastMode/* ,darkMode */])


    const contextvalues = {
        scale,
        setscale,
        LineHieght,
        setLinehight,
        Wordspacing,
        setWordspacing,
        contrastMode,
        setContrastMode,
        /*         darkMode,
                setDarkMode */
    }
    return (
        <>
            <AccessibilityContext.Provider value={contextvalues}>
                {children}
            </AccessibilityContext.Provider>
        </>
    )
}

export default AccessibilityContext