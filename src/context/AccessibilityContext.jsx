import { createContext, useState, useEffect } from 'react';

export const AccessibilityContext = createContext();

export const AccessibilityProvider = ({ children }) => {
    const [scale, setscale] = useState(localStorage.getItem('scale') || 'Medium')
    const [LineHieght, setLinehight] = useState(localStorage.getItem('LineHieght') === 'true'); 
    const [Wordspacing, setWordspacing] = useState(localStorage.getItem('Wordspacing') === 'true'); 
    const [contrastMode, setContrastMode] = useState(localStorage.getItem('contrastMode') === 'true'); 

    useEffect(() => {
        const root = document.documentElement;
        const body = document.body;

        /* Font Size (Using zoom) */
        root.style.zoom =
            scale === 'Medium' ? '1' :
                scale === 'Large' ? '1.1' :
                    scale === 'Very Large' ? '1.2' : '1'
        localStorage.setItem('scale', scale);

        root.style.wordSpacing = Wordspacing ? '10px' : 'normal';
        localStorage.setItem('Wordspacing', Wordspacing.toString());

        body.style.lineHeight = LineHieght ? '1.9' : '1.5';
        document.querySelectorAll('*').forEach(el => {
            el.style.lineHeight = LineHieght ? '1.9' : '1.5';
        });
        localStorage.setItem('LineHieght', LineHieght.toString());

        /* Contrast */
        root.style.filter = contrastMode ? 'contrast(110%)' : 'contrast(1)';
        localStorage.setItem('contrastMode', contrastMode.toString());

    }, [scale, LineHieght, Wordspacing, contrastMode]);

    const contextValues = {
        scale,
        setscale,
        LineHieght,
        setLinehight,
        Wordspacing,
        setWordspacing,
        contrastMode,
        setContrastMode
    };

    return (
        <AccessibilityContext.Provider value={contextValues}>
            {children}
        </AccessibilityContext.Provider>
    );
};

export default AccessibilityContext;
