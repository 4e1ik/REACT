import styles from '../Header/Header.module.css';
import {useContext} from "react";
import {ThemeContext} from "../../context/ThemeContext";

export const Header = () => {

    const {theme, setTheme} = useContext(ThemeContext);

    return  (
        <header className={`${styles.header} ${theme === 'black' ? styles.black : ''}`}>header</header>
    );
}