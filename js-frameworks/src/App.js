import "./App.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
//import Home from './components/home/Home';
import Admin from './components/admin/Admin';
import Contact from './components/contact/Contact';
import Login from './components/login/Login';
import BeerDetail from './components/beer/BeerDetail';
import BeerList from "./components/beer/BeerList";


function App() {
  return (
    <>
    <Router>
    <Navbar bg="dark" variant="dark" expand="lg">
        <NavLink to="/" exact>
          <Navbar.Brand>JS Frameworks CA</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/admin" className="nav-link">
              Admin
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    <Container>
        <Routes>
          <Route path="/" exact element={<BeerList />} />
          <Route path="/beer/:id" element= {<BeerDetail />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
    </Router>
    </>
  );
}

export default App;

