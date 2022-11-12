import style from './Button_menu.module.css';
import {useState} from "react";
// import название from ссылка на компонент
import {Title} from '../Title/Title';
export const Button_menu = (props) => {

    const [img, setImg] = useState(true);
    const {title} = props;

    return(
        <div className={style.elems}>
            <button className={`${style.Menu_button}`} onClick={() => setImg(!img)}><img className={`${style.img}`} src={img===true ?
            ("https://psv4.userapi.com/c237231/u166181930/docs/d20/ee9626e3bab1/Bez_imeni-3.png?extra=hk4z_-OM9BrPq9RHa4IArs2jwsouaFJ6EknPmhGnk7dawzTlbTHy_rDBDNGxHPoPyKJIkGjdOeHOS0C9MV3UId8T3nL-F74U1RliBG9DlQFD3G5AQXlqvF0mZ_VZlJw-68vK2x246N962f3WXZOzosJq")
            : ("https://www.vippng.com/png/full/137-1378304_edgeblend-on-the-mac-app-store-emblem.png")} alt=""/></button>
            {/*<h1>{img===true ? ('') : ('arfetgf')}</h1>*/}
            <Title title={img===true ? ('') : ('Sign')}>{title}</Title>
        </div>
    );

    // src="https://psv4.userapi.com/c237231/u166181930/docs/d20/ee9626e3bab1/Bez_imeni-3.png?extra=hk4z_-OM9BrPq9RHa4IArs2jwsouaFJ6EknPmhGnk7dawzTlbTHy_rDBDNGxHPoPyKJIkGjdOeHOS0C9MV3UId8T3nL-F74U1RliBG9DlQFD3G5AQXlqvF0mZ_VZlJw-68vK2x246N962f3WXZOzosJq"
    // <img className={`${style.img}`} src="https://www.vippng.com/png/full/137-1378304_edgeblend-on-the-mac-app-store-emblem.png" alt=""/>
}