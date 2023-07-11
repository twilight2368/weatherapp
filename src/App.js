import './index.css';
import Main from './page/Main';
import { createContext, useState } from 'react';
export const cityContext = createContext();


function App() {
  const [city, setCity] = useState(localStorage.getItem('currentCity'))
  return (
    <div className="App">
      <cityContext.Provider value = {[city, setCity]}>
        <Main />
      </cityContext.Provider>
    </div>
  );
}

export default App;
