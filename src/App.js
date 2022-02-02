import { Route, Routes } from 'react-router-dom';
import './App.scss';
import LoginPage from './modules/LoginPage';
import Dashboard from './modules/Dashboard';

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
