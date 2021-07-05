import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Item>
                        <Link to="/" className="nav-link">Home</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/listing" className="nav-link">Listings</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/upcoming" className="nav-link">Upcoming</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/bookings" className="nav-link">Bookings</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/openingtimes" className="nav-link">Opening Times</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/classifications" className="nav-link">Classifications</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/gettingthere" className="nav-link">Getting There</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/placestogo" className="nav-link">Places to go</Link>
                    </Nav.Item>
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