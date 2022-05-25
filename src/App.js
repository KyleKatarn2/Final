import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Welcome from './components/Welcome';
import Dashboard from './components/Dashboard';
import WrongPage from './components/WrongPage';
import SignUp from './components/SignUp';
import Authorization from './components/Authorization';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='sign-up' element={<SignUp />} />
          <Route path='/' element={<Welcome />}/>
          <Route path='/about' element={<Dashboard />} />
          <Route path='*' element={<WrongPage />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
