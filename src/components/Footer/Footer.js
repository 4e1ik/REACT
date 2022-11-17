import styles from '../Footer/Footer.module.css';
import {useContext} from "react";
import {ThemeContext} from "../../context/ThemeContext";

export const Footer = () => {

    const {theme, setTheme} = useContext(ThemeContext);

    return (
        <footer className={`${styles.footer} ${theme === 'black' ? styles.black : ''}`}>
            Footer
        </footer>
    );
}