import '../App.css'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div className="mb-0">
                <Row>
                    <Col sm={4}>
                        <h4>Where to find us</h4>
                        <ul className="list-unstyled">
                            <li >Bentley Bridge Park</li>
                            <li>Wednesfield Way</li>
                            <li>Wolverhampton</li>
                            <li>WV11 1TZ</li>
                        </ul>
                        {/* <p>Bentley Bridge Park</p>
                        <p>Wednesfield Way</p>
                        <p>Wolverhampton</p>
                        <p>WV11 1TZ</p> */}
                    </Col>
                    <Col sm={4}>
                        <h4>Find out more</h4>
                        <Link to={'/'}>Home</Link>
                        <br />
                        <Link to={'/aboutus'}>About Us</Link>
                        <br />
                        <Link to={'/contact'}>Contact Us</Link>
                    </Col>
                    <Col sm={4}>
                        <h4>Follow Us</h4>
                        <a href="https://www.facebook.com/QALtd/">Facebook</a>
                        <br />
                        <a href="https://twitter.com/QA_Ltd">Twitter</a>
                        <br />
                        <a href="https://www.instagram.com/qalimited/?hl=en">Instagram</a>
                        <br />
                        <a href="https://www.youtube.com/channel/UCr5kx6_fYtqx0LLD7aW2zIg">YouTube</a>
                        <br />
                    </Col>
                </Row>

            </div>
            <div>
                <p>QA Cinema &copy; 2021</p>
            </div>
        </div>
    );
}

export default Footer;