import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Drugs from './pages/Drugs';
import Add from './pages/Add';
import Update from './pages/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Drugs />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

