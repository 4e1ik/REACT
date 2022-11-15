import {Input} from '../Input/Input';
import {Button_send} from "../Button_send/Button_send";
import {useState} from "react";

export const Form = () => {

    const [input, setInput] = useState();

    const changeHandler = (val) => {
        console.log(val);
    }

    return (
        <div>
            {
                input &&
                <div>
                    <Input label={'Name'} placeholder={'Your name'} change={changeHandler}/>
                    <Input label={'Email'} placeholder={'Your email'} change={changeHandler}/>
                    <Input label={'Password'} placeholder={'Your password'} change={changeHandler}/>
                    <Button_send type='submit' onClick={() => setInput(false)} title={'Send'}/>
                </div>
            }
        </div>
    );
}
