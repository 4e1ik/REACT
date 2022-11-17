import {createContext, useState} from 'react';

export const ThemeContext = createContext();

function ThemeProvider(props) {
   const { children } = props;
   const [theme, setTheme] = useState('white')
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>{children}</ThemeContext.Provider>
    );
}

export default ThemeProvider