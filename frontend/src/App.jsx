import "./CSS/App.css";
import MovieCard from './components/MovieCard'
import  Favorites from './pages/Favorites';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import { MovieProvider } from "./Contexts/MovieContext";

function App() {
  return (
    <MovieProvider>
      <NavBar/>
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home/> } />
          <Route path='/Favorites' element={<Favorites/> } />
        </Routes>
     </main>
    </MovieProvider>
    
  );
 
}


export default App
