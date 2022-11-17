import './App.css';
import {Header} from "./components/Header/Header";
import {Body} from "./components/Body/Body";
import {Footer} from "./components/Footer/Footer";
import ThemeProvider from "./context/ThemeContext";

function App() {

  return (
      <div className={'App'}>
          <ThemeProvider>
              <Header />
              <Body />
              <Footer />
          </ThemeProvider>
      </div>
  );
}

export default App;
