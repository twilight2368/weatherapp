import './index.css';
import Main from './page/Main';
import { createContext, useState } from 'react';
export const cityContext = createContext();
export const themeContext = createContext();


function App() {
  const [city, setCity] = useState(localStorage.getItem('currentCity'))
  const [darkmode, setDarkmode] = useState();
  return (
    <div className="App">
      <cityContext.Provider value={[city, setCity]}>
        <themeContext.Provider value={[darkmode, setDarkmode]}>
          <Main />
        </themeContext.Provider>
      </cityContext.Provider>
    </div>
  );
}

export default App;
