import { Container, Row, Col, Collapse, Button } from 'react-bootstrap';
import { useState } from 'react';

const Classifications = () => {

    const [uOpen, setUOpen] = useState(false);
    const [pgOpen, setPgOpen] = useState(false);
    const [twelveOpen, setTwelveOpen] = useState(false);
    const [fifteenOpen, setFifteenOpen] = useState(false);
    const [eighteenOpen, setEighteenOpenOpen] = useState(false);

    return (
        <div className="mt-4">
            <h1> Film Classifications </h1>
            <br />
            <Container fluid>
                <Row className="mt-4">
                    <Col sm={2}>
                        <img src="u.png" width="200rem" alt="universal" />
                    </Col>
                    <Col sm={10}>
                        <h3>Universal - Suitable for all</h3>

                        <p>
                            A U film should be suitable for audiences aged four years
                            and over, although it is impossible to predict what might
                            upset any particular child.
                            U films should be set within a positive framework and should
                            offer reassuring counterbalances to any violence, threat or
                            horror. If a work is particularly suitable for pre-school
                            children, this will be indicated in the Ratings Info.</p>
                        <Button onClick={() => setUOpen(!uOpen)}>More Information</Button>
                        <Collapse in={uOpen}>
                            <div>
                                <ul>
                                    <li>Potentially dangerous behaviour must be clearly disapproved of. No emphasis on realistic or easily accessible weapons.</li>
                                    <li>Discriminatory language or behaviour is unlikely to be acceptable unless clearly disapproved of</li>
                                    <li>References to illegal drugs or drug misuse must be infrequent and innocuous, or have a clear educational purpose or anti-drug message.</li>
                                    <li>Infrequent use only of very mild bad language.</li>
                                    <li>Occasional nudity, with no sexual context.</li>
                                    <li>Scary or potentially unsettling sequences should be mild, brief and unlikely to cause undue anxiety. The outcome should be reassuring.</li>
                                    <li>Violence will generally be very mild. Mild violence may be acceptable if it is justified by context (for example, comedic, animated, wholly unrealistic).</li>
                                </ul>
                            </div>
                        </Collapse>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col sm={2}>
                        <img src="pg.png" width="200rem" alt="parentalguidance" />
                    </Col>
                    <Col sm={10}>
                        <h3>PG Parental Guidance</h3>

                        <p>
                            General viewing, but some scenes may be unsuitable for young children. A PG film
                            should not unsettle a child aged around eight or older. Unaccompanied children of
                            any age may watch, but parents are advised to consider whether the content may
                            upset younger, or more sensitive, children.</p>
                        <Button onClick={() => setPgOpen(!pgOpen)}>More Information</Button>
                        <Collapse in={pgOpen}>
                            <div>
                                <ul>
                                    <li>No detail of potentially dangerous behaviour. No glamorisation of realistic or easily accessible weapons </li>
                                    <li>Discrimination by a character with whom children can readily identify is unlikely to be acceptable.</li>
                                    <li>References to illegal drugs or drug misuse must be innocuous or carry a suitable anti-drug message.</li>
                                    <li>Mild bad language only.</li>
                                    <li>There may be nudity with no sexual context.</li>
                                    <li>Situations should not be prolonged or intense. Setting and comedy may be mitigating factors.</li>
                                    <li>There may be moderate violence, without detail, if justified by its context.</li>
                                </ul>
                            </div>
                        </Collapse>
                    </Col >


                </Row>
                <Row className="mt-4">
                    <Col sm={2}>
                        <img src="12a.png" width="200rem" alt="12andover" />
                    </Col>
                    <Col sm={10}>
                        <h3>12A/12 – Suitable for 12 years and over</h3>

                        <p>
                            Films classified 12A and video works classified 12 contain material that is not
                            generally suitable for children aged under 12. No one younger than 12 may see a 12A
                            film in a cinema unless accompanied by an adult. Adults planning to take a child
                            under 12 to view a 12A film should consider whether the film is suitable for that
                            child. To help them decide, we recommend that they check the Ratings Info for that
                            film in advance. No one younger than 12 may rent or buy a 12 rated video work.</p>
                        <Button onClick={() => setTwelveOpen(!twelveOpen)}>More Information</Button>
                        <Collapse in={twelveOpen}>
                            <div>
                                <ul>
                                    <li>No promotion of potentially dangerous behaviour.</li>
                                    <li>Discriminatory language or behaviour must not be endorsed by the work as a whole.</li>
                                    <li>Misuse of drugs must be infrequent and should not be glamorised or give detailed instruction.</li>
                                    <li>There may be moderate bad language. Strong language may be permitted, depending on context.</li>
                                    <li>There may be nudity/ sexual content, but in a sexual context it must be brief and discreet.</li>
                                    <li>There may be moderate physical and psychological threat and horror sequences.</li>
                                    <li>There may be moderate violence but it should not dwell on detail.</li>
                                </ul>
                            </div>
                        </Collapse>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col sm={2}>
                        <img src="15.png" width="200rem" alt="15andover" />
                    </Col>
                    <Col sm={10}>
                        <h3>15 – Suitable only for 15 years and over</h3>

                        <p>
                            No one younger than 15 may see a 15 film in a cinema. No one younger than 15 may rent
                            or buy a 15 rated video work.</p>
                        <Button onClick={() => setFifteenOpen(!fifteenOpen)}>More Information</Button>
                        <Collapse in={fifteenOpen}>
                            <div>
                                <ul>
                                    <li>Dangerous behaviour should not dwell on detail which could be copied.</li>
                                    <li>Discriminatory language or behaviour must not be endorsed by the work as a whole.</li>
                                    <li>Drug taking may be shown but the work as a whole must not promote or encourage drug misuse.</li>
                                    <li>There may be strong language. Very strong language may be permitted, depending on context.</li>
                                    <li>There are no constraints on nudity in a non-sexual or educational context. Sexual nudity may be permitted but strong detail is likely to be brief or presented in a comic context.</li>
                                    <li>Sexual activity may be portrayed, but usually without strong detail.</li>
                                    <li>There may be strong verbal references to sexual violence.</li>
                                    <li>There may be strong threat and horror. A sustained focus on sadistic threat is unlikely to be acceptable.</li>
                                    <li>Violence may be strong but should not dwell on the infliction of pain or injury.</li>
                                </ul>
                            </div>
                        </Collapse>
                    </Col>

                </Row>
                <Row className="mt-4">
                    <Col sm={2}>
                        <img src="18.png" width="200rem" alt="18andover" />
                    </Col>
                    <Col sm={10}>
                        <h3>18 – Suitable only for adults</h3>

                        <p>
                            No one younger than 18 may see an 18 film in a cinema. No one younger than 18 may
                            rent or buy an 18 rated video work. Adults should be free to choose their own
                            entertainment. Exceptions are below:</p>
                        <Button onClick={() => setEighteenOpenOpen(!eighteenOpen)}>More Information</Button>
                        <Collapse in={eighteenOpen}>
                            <div>
                                <ul>
                                    <li>where the material is in breach of the criminal law, or has been created through the commission of a criminal offence</li>
                                    <li>where material or treatment appears to us to risk harm to individuals or, through their behaviour, to society. </li>
                                    <li>where there are more explicit images of sexual activity in the context of a sex work.</li>
                                </ul>
                            </div>
                        </Collapse>
                    </Col>
                </Row>
                <br />
                <Row className="mt-4">
                    <Col sm={2}>
                        <img src="r18.png" width="200rem" alt="r18" />
                    </Col>
                    <Col sm={10}>
                        <h3>R18</h3>

                        <p>
                            The R18 category is a special and legally-restricted classification primarily for explicit
                            works of consenting sex or strong fetish material involving adults. Films may only be shown
                            to adults in specially licensed cinemas, and video works may be supplied to adults only in
                            licensed sex shops. R18 video works may not be supplied by mail order.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Classifications;
