import React , { useEffect, useState, createContext } from 'react';
import { NavBar } from './Components/NavBar/NavBar.jsx';
import { Pagination } from './Components/Pagination/Pagination.jsx';
import { Characters } from './Components/Characters/Characters.jsx';
import './App.css';

const AppContext = createContext(null);

function App() {
  const [ characters , setCharacters ] = useState([]);
  const [ info  , setInfo ] = useState({});

  const fetchData = url => {
    fetch( url )
    .then( response => response.json() )
    .then( data => {
       setCharacters(data.results)
        setInfo(data.info)  
    })
    .catch( error => console.log(error) )
  }

  useEffect( ()=>{
    fetchData('https://rickandmortyapi.com/api/character');
  }, [] )

  const onPrev = () => fetchData(info.prev);
  const onNext = () => fetchData(info.next);
  
  return (
    <AppContext.Provider className="App" value={{
      onPrev , onNext , characters , info
    }}>
      <NavBar/>
      <Pagination />
        <Characters />
      <Pagination />
    </AppContext.Provider>
  );
}

export { App , AppContext };
