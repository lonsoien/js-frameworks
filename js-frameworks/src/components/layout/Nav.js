import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import Navbar from "react-bootstrap/Navbar"; 
import Nav from "react-bootsrap/Nav";

function Nav() {
	const [auth, setAuth] = useContext(AuthContext);

	const history = useNavigate();

	function logout() {
		setAuth(null);
		history.push("/login");
	}

    return (
        <nav>
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
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
            <NavLink to="/login" className="nav-link">
              Login
              {auth ? (
				<>
					| <Link to="/admin">Admin</Link> | <button onClick={logout}>Log out</button>
				</>
			) : (
				<Link to="/login">Login</Link>
			)}
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        </nav>
    );
            }

            export default Nav; 
