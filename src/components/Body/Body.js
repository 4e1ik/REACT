import styles from '../Body/Body.module.css';
import {useContext, useEffect, useRef, useState} from "react";
import {ThemeContext} from "../../context/ThemeContext";
import {Square} from "../Square/Square";

export const Body = () => {

    const {theme, setTheme} = useContext(ThemeContext);
    const myInput = useRef();
    const sqValue = useRef();

    const [colors, setColors] = useState([]);

    useEffect(() => {
        setColors(createColorsArray());

    }, [])

    // const refTest = () => {
    //     console.log(myInput.current);
    //     myInput.current
    // }

    const randColor = () => {
        return  `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
    };

    const createColorsArray = () => {
        const arr = [];
        for (let i =0; i<3; i++){
            arr.push(randColor());
        }
        return arr;
    };

    const randomNumber = (min, max) => {
        return Math.round(min - 0.5 + Math.random() * (max - min + 1));
    };
    let a = randomNumber(0, 2);
    return (
        <main className={`${styles.main} ${theme === 'black' ? styles.black : ''}`}>
            <button className={styles.button} onClick={() => setTheme(prev => prev === 'white' ? 'black' : 'white')}>
                Switch Themes
                {theme}
            </button>
            <input ref={myInput} type="text"/>
            <p onClick={() => myInput.current.focus()}>{theme}</p>
            <h5 style={{color: `${colors[a]}`}}>{colors[a]}</h5>
            {colors.map((el) => <Square key={el} color={el} ref={sqValue} onClick={() => alert(colors[a] === el ? 'Угадал' : 'Не угадал')}/> )}
        </main>
    );
}