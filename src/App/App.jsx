import React  from 'react';
import { NavBar } from '../Components/NavBar/NavBar.jsx';
import { Home } from '../Pages/Home/Home.jsx';
import { Profile } from '../Pages/Profile/Profile.jsx';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import './App.css';


function App() {

  return (
      <div className='App' >      
        <Router>
          <NavBar/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/profile' element={<Profile/>}/>
            </Routes>
        </Router>
      </div>
  );

}

export { App };
