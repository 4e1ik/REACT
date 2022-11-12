import style from './Title.module.css';

export const Title = (props) => {

    const {title} = props;

    return (<h1 className={style.main}>{title}</h1>);
}