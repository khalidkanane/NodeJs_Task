
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './auth/login';
import { Register } from './auth/register';

function App() {
  return (
    <div className="App">
      
      <Routes>
              <Route path='/' element={<Login/>} />
              <Route path='/Register' element={<Register/>} />
              

      </Routes>

    </div>
  );
}

export default App;
