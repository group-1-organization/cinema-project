import { Container } from 'react-bootstrap';

import StandardSeating from '../standardseating.png'
import StandardDecor from '../standarddecor.jpg'
import PremiumDecor from '../premiumdecor.jpg'
import PremiumSeating from '../deluxeseating.PNG'
import './Screens.css'

const Screens = () => {
    return (
        <div>
            <div class="header">
                <h1>Screens</h1>
            </div>
            <Container>
                <br />
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
    );
}

export default Screens;