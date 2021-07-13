import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker'

const { apiKey } = require('../../const.json');

const GettingThere = () => {
    return (
        <div>
            <div className="page-header">
                <h1>How to find us</h1>
            </div>
            <br />
            <Container>

                <Image src="/images/cinema.jpg" fluid />
                <h2>Address</h2>
                <p>
                    Bentley Bridge Park <br />
                    Wednesfield Way <br />
                    Wolverhampton <br />
                    WV11 1TZ
                </p>
                <br />
                <h2>Directions</h2>
                <h3>Bus</h3>
                <p>
                    Buses 59, 561, 562, 613 stop near the cinema. There are also the 69, 89, 25 and 28 lines from the bus station.
                </p>
                <h3>Train</h3>
                <p>
                    Nearest station Wolverhampton. Take bus from bus station close by.
                </p>
                <br />
                <h2>Parking</h2>
                <p>
                    Free parking available is available nearby the cinema.
                </p>
                <br />
                <h2>Map</h2>
                <div style={{ height: '650px', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: apiKey }}
                        defaultCenter={{
                            lat: 52.596324,
                            lng: -2.092680
                        }}
                        defaultZoom={17} >
                        <Marker
                            lat={52.596324}
                            lng={-2.092680}
                            text="QA Marker" />
                    </GoogleMapReact>
                </div>
            </Container >
        </div>
    )
}

export default GettingThere
