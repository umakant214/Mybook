import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Login from './Components/Login';
import Register from './Components/Register';
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/create' element={<>Create</>}/>
        <Route path='/view' element={<>View</>}/>
        <Route path='/edit' element={<>Edit</>}/>
        <Route path='*' element={<>404 Page Not Found....!</>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
