import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import Animals from '../components/Animals';
import Button from 'react-bootstrap/Button';
import HappinessTracker from '../components/HappinessTracker';
import Dances from '../components/Dance';
import Song from '../components/Song';
import Motivation from '../components/Motivation';
import Greeting from '../components/Greeting';
import About from './About';

const HomePage = () => {
    const [questionName, setQuestionName] = useState('happinessTracker');
    const [happinessTracker, setHappinessTracker] =
        useState<EmotionType>('Neutral');
    const [inputValue, setInputValue] = useState('');
    const [responseValue, setResponseValue] = useState('');
    const [previousQuestion, setPreviousQuestion] = useState('');
    const [notYetAskedQuestion, setNotYetAskedQuestion] = useState([
        'animal',
        'dance',
        'song',
        'motivation',
    ]);
    const [userName, setUserName] = useState('');

    const setRandomQuestionName = () => {
        setResponseValue('');

        const randomQuesionName =
            notYetAskedQuestion[
                Math.floor(Math.random() * notYetAskedQuestion.length)
            ];

        setPreviousQuestion(randomQuesionName);

        setQuestionName(randomQuesionName);
        setNotYetAskedQuestion(
            notYetAskedQuestion.length === 1
                ? ['animal', 'dance', 'song', 'motivation']
                : notYetAskedQuestion.filter(
                      (questionName) => questionName != randomQuesionName
                  )
        );
    };

    const handleHappinessTracker = (emotion: EmotionType) => {
        setHappinessTracker(emotion);
        if (emotion != 'Happy') {
            setRandomQuestionName();
        }
    };

    const questions: any = {
        happinessTracker: (
            <HappinessTracker
                handleHappinessTracker={handleHappinessTracker}
                previousQuestion={previousQuestion}
                userName={userName}
            />
        ),
        animal: (
            <Animals
                setQuestionName={setQuestionName}
                responseValue={responseValue}
                handleHappinessTracker={handleHappinessTracker}
                userName={userName}
                happinessTracker={happinessTracker}
            />
        ),
        dance: (
            <Dances
                setQuestionName={setQuestionName}
                responseValue={responseValue}
                handleHappinessTracker={handleHappinessTracker}
                userName={userName}
                happinessTracker={happinessTracker}
            />
        ),
        song: (
            <Song
                setQuestionName={setQuestionName}
                responseValue={responseValue}
                handleHappinessTracker={handleHappinessTracker}
                userName={userName}
            />
        ),
        motivation: (
            <Motivation
                setQuestionName={setQuestionName}
                responseValue={responseValue}
                handleHappinessTracker={handleHappinessTracker}
                userName={userName}
            />
        ),
    };

    return (
        <Container>
            <Row>
                <Col sm={8}>
                    <div className='chatbox'>
                        {userName === '' ? (
                            <Greeting
                                setQuestionName={setQuestionName}
                                responseValue={responseValue}
                                setUserName={setUserName}
                                setResponseValue={setResponseValue}
                            />
                        ) : happinessTracker === 'Happy' ? (
                            <>
                                <h2>Yay you are happy!</h2>
                                <img src='https://media2.giphy.com/media/l7fdqmHQ1jCg2HzQlx/giphy.gif?cid=f5e8c4195biwmgyceeudgcpn18te3ahkksp58s9cn18fngom&amp;rid=giphy.gif&amp;ct=g' />
                            </>
                        ) : (
                            <>{questions[questionName]}</>
                        )}
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
                                Send{' '}
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='16'
                                    height='16'
                                    fill='currentColor'
                                    className='bi bi-send'
                                    viewBox='0 0 16 16'>
                                    <path d='M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z' />
                                </svg>
                            </Button>
                        </InputGroup>
                    </div>
                </Col>
                <Col sm={4}>
                    <div className='smily'>
                        <div className='eyes'></div>
                        <div className={`lips ${happinessTracker}`}></div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;
