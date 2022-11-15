import styles from '../Input/Input.module.css';
import {useState} from "react";

export const Input = (props) => {

    const {label, placeholder, change} = props;

    const [value, setValue] = useState('');

    const inputHandler = (el) => {
        setValue(el.target.value);
        change(value);
    }

    return (
        <div>
            <label className={styles.lable} htmlFor={label}>{label}</label>
            <input value={value} onChange={inputHandler} id={label} placeholder={placeholder} className={styles.input} type="text"/>
        </div>
    );
}