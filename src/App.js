import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Meal from './components/Meal/Meal';
import Meals from './components/Meals/Meals';

import {Header} from "./components/Header/Header";
import {Body} from "./components/Body/Body";
import {Footer} from "./components/Footer/Footer";
import ThemeProvider from "./context/ThemeContext";

function App() {

  return (
      <div className={'App'}>
          {/*<Link to={'/'}>main</Link>*/}
          {/*<br/>*/}
          {/*<Link to={'/about'}>about</Link>*/}
          {/*<br/>*/}
          {/*<Route path='/' element={<Navbar/>} />*/}
          <Navbar />
          <Routes>
              <Route path='/' element={<Meals />} />
              <Route path='/meal' element={<Meal />} />
              <Route path='/meal/:id' element={<Meal />} />
          </Routes>
          {/*<ThemeProvider>*/}
          {/*    <Header />*/}
          {/*    <Body />*/}
          {/*    <Footer />*/}
          {/*</ThemeProvider>*/}

      </div>
  );
}

export default App;
