import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';

const About = () => {
    const [inputValue, setInputValue] = useState('');
    const [responseValue, setResponseValue] = useState('');
    return (
        <Container>
            <Row>
                <Col sm={8}>
                    <div className='chatbox'>
                        <h1>About{responseValue}</h1>
                    </div>

                    <div>
                        <InputGroup size='lg'>
                            <FormControl
                                value={inputValue}
                                onChange={(event) =>
                                    setInputValue(event.target.value)
                                }
                                aria-label='Large'
                                aria-describedby='inputGroup-sizing-sm'
                            />

                            <Button
                                onClick={() => {
                                    setResponseValue(inputValue);
                                    setInputValue('');
                                }}
                                variant='outline-secondary'
                                id='button-addon2'>
                                Enter
                            </Button>
                        </InputGroup>
                    </div>
                </Col>
                <Col sm={4}></Col>
            </Row>
        </Container>
    );
};

export default About;
