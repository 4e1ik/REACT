import styles from './Input.module.css';
import {useState} from "react";

export const Input = (props) => {
    const {label, placeholder, change} = props;
    const [count, setCount] = useState(0);
    const [value, setValue] = useState('');

    const inputHandler = (el) => {
        setValue(el.target.value);
        change(value);
    }

    const clickHadler = () => {
        setCount((prev) => --prev)
    }

    const clickHadlerNew = (e) => {
        e.preventDefault();
        setCount((prev) => ++prev)
    }

    return(
        <div className={styles.wrapper}>
            <label className={styles.lable} htmlFor={label}>{label}</label>
            <input value={value} onChange={inputHandler}  id={label} placeholder={placeholder} className={styles.input} type="text"/>
            <p onClick={clickHadler} onContextMenu={clickHadlerNew}>{count}</p>
            <span className={styles.hint}>Hint</span>
        </div>
    );
};