import { Link, Route, Routes, } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import SignUp from "./Components/signUp";
import Home from "./Components/Home";


function App() {
  return (
    <div className="App">
      
      <Link to="/"></Link>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
