import styles from '../Square/Square.module.css';

export const Square = (props) => {

    const {color, onClick} = props;

    return (
        <div style={{backgroundColor: `${color}`}} className={styles.square} onClick={onClick}></div>
    );
}