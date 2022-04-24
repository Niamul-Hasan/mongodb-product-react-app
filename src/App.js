import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProducts from './Pages/AddProducts/AddProducts';
import Home from './Pages/Home/Home';
import UpdateData from './Pages/UpdateData/UpdateData';

function App() {
  return (
    <div className="container">

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add" element={<AddProducts />}></Route>
        <Route path="/update/:updateId" element={<UpdateData />}></Route>
      </Routes>

    </div>
  );
}

export default App;
