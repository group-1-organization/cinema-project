import { Card, Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Collapse } from 'react-bootstrap';
import { useState } from 'react';

import StandardSeating from '../standardseating.png'
import StandardDecor from '../standarddecor.jpg'
import PremiumDecor from '../premiumdecor.jpg'
import PremiumSeating from '../deluxeseating.PNG'
import '../App.css'

const Screens = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <div class="page-header">
                <h1>Screens</h1>
            </div>
            <br />
            <div className="black-font">
                <Container>
                    {/* <Card className="text-center">
                        <Card.Header>
                            <h2>Standard screens</h2>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Our standard screens feature comfortable seating with an arm rest on one side featuring a cup holder, with appreciable leg room and a great soundscape.

                            </Card.Text>
                            <br />
                            <img src={StandardDecor} alt='Standard decor' />
                            <br />
                            <Collapse in={open}>
                                <Button
                                    onClick={() => setOpen(!open)}
                                    aria-controls="collapse-standard-plan"
                                    aria-expanded={open}
                                >
                                    View Standard screen seating plan
                                </Button>
                                <div id="collapse-standard-plan">
                                    <img src={StandardSeating} alt='Standard seating' />
                                </div>
                            </Collapse>
                        </Card.Body>

                    </Card> */}

                    <h2>Standard screens</h2>
                    <div>
                        <p>Our standard screens feature a typical seating plan with ample leg room, and an excellent soundscape</p>
                        <center>
                            <img src={StandardSeating} alt='Standard seating' />
                        </center>
                    </div>
                    <br />
                    <div>
                        <p>Our standard screens feature comfortable seating with an arm rest on one side featuring a cup holder.</p>
                        <center>
                            <img src={StandardDecor} alt='Standard decor' />
                        </center>
                    </div>
                    <br />
                    <h2>Premium screens</h2>
                    <div>
                        <p>Our premium screens feature a typical seating plan with significant leg room, an excellent soundscape, and a smaller room for a more initimate feel.</p>
                        <center>
                            <img src={PremiumSeating} alt='Premium seating' />
                        </center>
                    </div>
                    <br />
                    <div>
                        <p>Our premium screens feature extra comfortable seating with reclining chairs, an arm rest on each side both featuring a cup holder, and cushions for extra support.</p>
                        <center>
                            <img src={PremiumDecor} alt='Premium decor' />
                        </center>
                    </div>
                    <br />
                </Container>
            </div>
        </div>
    );
}

export default Screens;