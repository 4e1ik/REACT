import './Hw_1.css';
import {Title} from './hw_11.11.2022/Title/Title';
import {Button_menu} from './hw_11.11.2022/Button_menu/Button_menu';

function Hw_1() {

    return(
        <div className="Hw_1">
            <Title title={'Sing Up'}/>
            <div className='Menu'>
                <div className='menu_area'>
                    <Button_menu />
                </div>
            </div>
        </div>
    );
}

export default Hw_1;