import { Route, Routes } from 'react-router-dom';
import './App.scss';
import LoginPage from './modules/LoginPage/LoginPage';
import Dashboard from './modules/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
