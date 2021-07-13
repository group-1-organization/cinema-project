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
    const [premOpen, setPremOpen] = useState(false);

    return (
        <div>
            <div class="page-header">
                <h1>Screens</h1>
            </div>
            <br />
            <div className="black-font">
                <Container>
                    <Card className="screen-card">
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
                            <br />
                            <Button
                                onClick={() => setOpen(!open)}
                                aria-controls="collapse-standard-plan"
                                aria-expanded={open}
                                className="button-colour"
                            >
                                View Standard screen seating plan
                            </Button>
                            <br />
                            <br />
                            <Collapse in={open}>
                                <div id="collapse-standard-plan">
                                    <img src={StandardSeating} alt='Standard seating' />
                                </div>
                            </Collapse>
                        </Card.Body>
                    </Card>
                    <br />
                    <Card className="screen-card">
                        <Card.Header>
                            <h2>Premium screens</h2>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Our premium screens feature extra comfortable seating with reclining chairs, an arm rest on each side both featuring a cup holder, and cushions for extra support. They also feature significant leg room, an excellent soundscape, and a smaller room for a more initimate feel.

                            </Card.Text>
                            <br />
                            <img src={PremiumDecor} alt='Premium decor' />
                            <br />
                            <br />
                            <Button
                                onClick={() => setPremOpen(!premOpen)}
                                aria-controls="collapse-premium-plan"
                                aria-expanded={premOpen}
                                className="button-colour"
                            >
                                View Premium screen seating plan
                            </Button>
                            <br />
                            <br />
                            <Collapse in={premOpen}>
                                <div id="collapse-premium-plan">
                                    <img src={PremiumSeating} alt='Premium seating' />
                                </div>
                            </Collapse>
                        </Card.Body>


                    </Card>
                </Container>
            </div>
        </div>
    );
}

export default Screens;