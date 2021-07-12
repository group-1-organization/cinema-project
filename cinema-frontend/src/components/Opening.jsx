import { Container } from 'react-bootstrap';
import '../Styles/Opening.css';
import '../App.css'

const Opening = () => {
    return (
        <div>
            <div class="page-header">
                <h1>Opening Hours</h1>
            </div>
            <br />
            <Container>
                <center class="op-font-colour">
                    <div class="col-m-12">
                        <p class="col-m-6">Monday: </p>
                        <p class="col-mr-6 hours">9:00-23:00</p>
                    </div>
                    <div class="col-m-12">
                        <p class="col-m-6">Tuesday:</p>
                        <p class="col-mr-6 hours">9:00-23:00</p>
                    </div>
                    <div class="col-m-12">
                        <p class="col-m-6">Wednesday:</p>
                        <p class="col-mr-6 hours">9:00-23:00</p>
                    </div>
                    <div class="col-m-12">
                        <p class="col-m-6">Thursday:</p>
                        <p class="col-mr-6 hours">9:00-23:00</p>
                    </div>
                    <div class="col-m-12">
                        <p class="col-m-6">Friday:</p>
                        <p class="col-mr-6 hours">9:00-23:00</p>
                    </div>
                    <div class="col-m-12">
                        <p class="col-m-6">Saturday:</p>
                        <p class="col-mr-6 hours">9:00-23:00</p>
                    </div>
                    <div class="col-m-12">
                        <p class="col-m-6">Sunday:</p>
                        <p class="col-mr-6 hours">9:00-23:00</p>
                    </div>
                </center>
            </Container>
        </div>
    );
}

export default Opening;