import { Input } from '../Input/Input';
import { Button_send } from '../Button_send/Button_send';
import { useState } from 'react';

export const Form = () => {
    const [input, setInput] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const clickHandler = () => {
        console.log(name, email);
    };

    const changeNameHandler = (val) => {
        setName(val);
    };
    const changeEmailHandler = (val) => {
        setEmail(val);
    };

    return (
        <div>
            {input && (
                <div>
                    <Input
                        label={'Name'}
                        placeholder={'Your name'}
                        change={changeNameHandler}
                    />
                    <Input
                        label={'Email'}
                        placeholder={'Your email'}
                        change={changeEmailHandler}
                    />
                    <Input label={'Password'} placeholder={'Your password'} />
                </div>
            )}
            <Button_send type="submit" onClick={() => setInput(prev => !prev)} title={'Send'} />
        </div>
    );
};