import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProducts from './Pages/AddProducts/AddProducts';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="container">

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add" element={<AddProducts />}></Route>
      </Routes>

    </div>
  );
}

export default App;
