import style from './Button.module.css';

export const Button = (props) => {
    console.log(props);
    const { disabled, title, type } = props;

    const st = {
        primary: style.primary,
        secondary: style.secondary,
    };

    const getFirstLetters = (name) => name.split(' ').map(el => el[0].toUpperCase()).join('');

    return (<button disabled={disabled} className={`${style.main} ${st[type]}`} onClick={() => alert('Hello Word')}><div className={style.letters}>{getFirstLetters(title)}</div>{title}</button>);
}