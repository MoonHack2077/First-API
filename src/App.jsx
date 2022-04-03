import { NavBar } from './Components/NavBar/NavBar.jsx';
import { Pagination } from './Components/Pagination/Pagination.jsx';
import { Characters } from './Components/Characters/Characters.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Pagination/>
        <Characters/>
      <Pagination/>
    </div>
  );
}

export { App };
