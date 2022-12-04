import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarComponent from './components/Navbar';
import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import Store from "./pages/Store"
import Appliances from "./pages/Appliances"
import Computers from "./pages/Computers"
import Phones from "./pages/Phones"
import TVs from "./pages/TVs"

function App() {
  return (
    <Container>
      <NavbarComponent></NavbarComponent>
      <div className ="routerContainer">
        <Routes>
          <Route path="/" element={<Store/>} />
          <Route path="/appliances" element={<Appliances/>} />
          <Route path="/computers" element={<Computers/>} />
          <Route path="/phones" element={<Phones/>} />
          <Route path="/tvs" element={<TVs/>} />
          <Route path="/about" element={<Store/>} />
        </Routes>
      </div>
    </Container>
  );
}

export default App;
