import React , { createContext } from 'react';
import { NavBar } from '../Components/NavBar/NavBar.jsx';
import { Loading } from '../Components/Loading/Loading.jsx';
import { AppLogic } from './AppLogic';
import { Ricks } from '../Pages/Ricks/Ricks.jsx';
import { Mortys } from '../Pages/Mortys/Mortys.jsx';
import { Home } from '../Pages/Home/Home.jsx';
import { Profile } from '../Pages/Profile.jsx';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import './App.css';

const AppContext = createContext(null);

function App() {
  //Desestructuring the states and functions to send as value on AppContext
  const { characters , info , onPrev , onNext , loading , xd} = AppLogic();

  return (
    <AppContext.Provider value={{ onPrev , onNext , characters , info , loading , xd }}>
      <div className='App' >
        
      <Router>
        <NavBar/>
        <Loading />
          <Routes>
          <Route path='/' element={<Home/>}/>
            <Route path='/ricks' element={<Ricks/>}/>
            <Route path='/mortys' element={<Mortys/>}/>
            <Route path='/profile' element={<Profile/>}/>
          </Routes>
        </Router>
      </div>
    </AppContext.Provider>
  );

}

export { App , AppContext };
