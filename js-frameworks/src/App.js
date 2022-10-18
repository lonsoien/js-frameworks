import "./App.css";
import Layout from './components/layout/Layout';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Login from './components/login/Login';
import BeerDetail from './components/beer/BeerDetail';

function App() {
  return (
    <>
    <Layout />
    <Router>
    <Container>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/detail/:id" element= {<BeerDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
    </Router>
    </>
  );
}

export default App;

