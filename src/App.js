import './App.css';
import {Button} from './components/Button/Button';
import {Input} from "./components/Input/Input";


function App() {

    const changeHandler = (val) => {
        console.log(val);
    }

  return (
      <div>
        <Input label={'Name'} placeholder={'Name'} change={changeHandler}/>
        <Input label={'Email'} placeholder={'Email'} change={changeHandler}/>
      </div>
  );
}

export default App;
