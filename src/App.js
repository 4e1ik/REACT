import './App.css';
import {Button} from './components/Button/Button';


function App() {

  return (
    <div className="App">
      <Button title={'Name Last'} type={'primary'} />
      <Button title={'Artem Artemov'} type={'secondary'}/>
    </div>
  );
}

export default App;
