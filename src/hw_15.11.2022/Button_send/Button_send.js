import styles from '../Button_send/Button_send.module.css';

export const Button_send = (props) => {
    const { title, onClick } = props;
    return <button onClick={onClick}>{title}</button>;
};