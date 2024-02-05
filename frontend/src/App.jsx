import {Navigate , Route , Routes} from 'react-router-dom'
import './App.css';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import axios from 'axios'
import {Toaster} from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext"

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials=true;

function App() {
  const { authUser } = useAuthContext();
  return (
    <div className='p-4 h-screen flex items-center justify-center'> 
    <Routes>
         <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />}> </Route>
         <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />}></Route>
         <Route path='/signup' element={authUser ? <Navigate to = '/' /> : <Signup />}></Route>
    </Routes>
    <Toaster /> 
    </div>
  );
}

export default App
