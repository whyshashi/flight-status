
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FlightBoard } from './components/FlightBoard';
import { FlightDetail } from './components/FlightDetail';
import './App.css'
function App() {
  return (
    <Router>
      <div className="App">
        <h1 className='title'>Flight Status Board</h1>
        <Routes>
          <Route path="/" element={<FlightBoard />} />
          <Route path="/flight/:id" element={<FlightDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;