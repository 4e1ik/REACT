import './App.css';
import {useRef, useState} from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Meal from './components/Meal/Meal';
import Meals from './components/Meals/Meals';

import {Header} from "./components/Header/Header";
import {Body} from "./components/Body/Body";
import {Footer} from "./components/Footer/Footer";
import ThemeProvider from "./context/ThemeContext";

function App() {

    const [top, setTop] = useState();
    const [left, setLeft] = useState();
    const [absolute, setAbsolute] = useState();

    const appRef = useRef();

    const handlerMouseEnter = () => {
        setAbsolute(true)
        setTop(random(appRef.current.clientHeight));
        setLeft(random(appRef.current.clientWidth));
        console.log(appRef.current.clientHeight)
        console.log(appRef.current.clientWidth)
    }

    const random = (int) => {
       return Math.floor(Math.random()*int);
    }


  return (
      <div className={'App'} ref={appRef}>
            <h2>Вы довольны своей зп?</h2>
          <div className={'btn-wrapper'}>
              <button onClick={() => alert('Я так и думал')}>Да</button>
              <button
                  style={{ position: absolute ? 'absolute' : 'none',
                      top,
                      left,
                  }}
                  className={'no'}
                  onMouseEnter={handlerMouseEnter}>Нет</button>
          </div>

          {/*<Link to={'/'}>main</Link>*/}
          {/*<br/>*/}
          {/*<Link to={'/about'}>about</Link>*/}
          {/*<br/>*/}
          {/*<Route path='/' element={<Navbar/>} />*/}
          {/*<Navbar />*/}
          {/*<Routes>*/}
          {/*    <Route path='/' element={<Meals />} />*/}
          {/*    <Route path='/meal' element={<Meal />} />*/}
          {/*    <Route path='/meal/:id' element={<Meal />} />*/}
          {/*</Routes>*/}
          {/*<ThemeProvider>*/}
          {/*    <Header />*/}
          {/*    <Body />*/}
          {/*    <Footer />*/}
          {/*</ThemeProvider>*/}
      </div>
  );
}

export default App;
