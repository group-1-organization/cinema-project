import { Container } from 'react-bootstrap';
import '../Styles/Opening.css';
import '../App.css'
import { Table } from 'react-bootstrap';

const Opening = () => {
    return (
        <div>
            <div class="page-header">
                <h1>Opening Hours</h1>
            </div>
            <br />
            <Container>
                {/* <center class="op-font-colour">
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
                </center> */}
                {/* striped bordered hover variant="dark" */}
                <Table className="table-format" borderless>
                    {/* <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead> */}
                    <tbody>
                        <tr>
                            <td>Monday:</td>
                            <td>11:00 - 23:00</td>
                        </tr>
                        <tr>
                            <td >Tuesday:</td>
                            <td >11:00 - 23:00</td>
                        </tr>
                        <tr>
                            <td>Wednesday:</td>
                            <td>11:00 - 23:00</td>
                        </tr>
                        <tr>
                            <td>Thursday:</td>
                            <td>11:00 - 23:00</td>
                        </tr>
                        <tr>
                            <td>Friday:</td>
                            <td>11:00 - 23:00</td>
                        </tr>
                        <tr>
                            <td>Saturday:</td>
                            <td>9:00 - 23:00</td>
                        </tr>
                        <tr>
                            <td className>Sunday:</td>
                            <td>9:00 - 23:00</td>
                        </tr>

                        {/* <tr>
                            <td></td>
                            <td></td>
                        </tr> */}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
}

export default Opening;