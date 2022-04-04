import React , { createContext } from 'react';
import { NavBar } from './Components/NavBar/NavBar.jsx';
import { Pagination } from './Components/Pagination/Pagination.jsx';
import { Characters } from './Components/Characters/Characters.jsx';
import { Modal } from './Components/Modal/Modal.jsx';
import { AppLogic } from './AppLogic';
import './App.css';

const AppContext = createContext(null);

function App() {
  //Desestructuring the states and functions to send as value on AppContext
  const { characters , info , onPrev , onNext , loading } = AppLogic();

  return (
    <AppContext.Provider value={{ onPrev , onNext , characters , info , loading }}>
      <NavBar/>
      <Pagination />
      {/* <Modal /> */}
        <Characters />
      <Pagination />
    </AppContext.Provider>
  );

}

export { App , AppContext };
