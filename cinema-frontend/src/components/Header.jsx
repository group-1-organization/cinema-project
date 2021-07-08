import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Image from 'react-bootstrap/Image';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Link to="/" className="nav-link"><Image src="QA.png" width="50" /> </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Item>
                        <Link to="/listing" className="nav-link">Listings</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/upcoming" className="nav-link">Upcoming</Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Link to="/bookings" className="nav-link">Bookings</Link>
                    </Nav.Item>
                    <NavDropdown title="Info" id="navbarScrollingDropdown" >
                        <NavDropdown.Item href="/gettingthere">Getting There</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/placestogo">Places to go</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/openingtimes">Opening Times</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/classifications">Classifications</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Item>
                        <Link to="/discussion" className="nav-link">Discussion Board</Link>
                    </Nav.Item>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header