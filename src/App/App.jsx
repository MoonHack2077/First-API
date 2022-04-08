import React , { createContext } from 'react';
import { NavBar } from '../Components/NavBar/NavBar.jsx';
import { Pagination } from '../Components/Pagination/Pagination.jsx';
import { Characters } from '../Components/Characters/Characters.jsx';
import { Loading } from '../Components/Loading/Loading.jsx';
import { AppLogic } from './AppLogic';
import './App.css';

const AppContext = createContext(null);

function App() {
  //Desestructuring the states and functions to send as value on AppContext
  const { characters , info , onPrev , onNext , loading } = AppLogic();

  return (
    <AppContext.Provider value={{ onPrev , onNext , characters , info , loading }}>
      <div className='App' >
        <NavBar/>
        <Loading />
        <Pagination />
          <Characters />
        <Pagination />
      </div>
    </AppContext.Provider>
  );

}

export { App , AppContext };
