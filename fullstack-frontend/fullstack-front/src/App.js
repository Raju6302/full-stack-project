
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/AddUser" element={<AddUser/>}/> 
          <Route path="/EditUser/:id" element={<EditUser/>}/>  
          <Route path="/ViewUser/:id" element={<ViewUser/>}/>    
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
