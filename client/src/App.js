
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './auth/login';

import Layout from './Admin/Layout';
import ListeTasks from './Admin/ListeTasks/ListeTasks';
import LayoutUser from './user/LayoutUser';
import Profile from './user/Profile';
import Register from './auth/register';

function App() {
  return (
    <div className="App">
      
      <Routes>
      <Route path='/login' element={<Login/>} />
              <Route path='/' element={<Login/>} />
              <Route path='/Register' element={<Register/>} />

              <Route path='/Admin' element={<Layout/>} >
                <Route index  element={<ListeTasks/>} />
                

              </Route>
              
              <Route path='/user' element={<LayoutUser/>} >
                <Route index  element={<Profile/>} />


              </Route>

      </Routes>

    </div>
  );
}

export default App;
