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

    // const setQuestion = (questionName: string) => {
    //     return setQuestionName(questionName);
    // };

    const questions: any = {
        happinessTracker: (
            <HappinessTracker
                handleHappinessTracker={handleHappinessTracker}
                previousQuestion={previousQuestion}
            />
        ),
        animal: (
            <Animals
                setQuestionName={setQuestionName}
                responseValue={responseValue}
                handleHappinessTracker={handleHappinessTracker}
            />
        ),
        dance: (
            <Dances
                setQuestionName={setQuestionName}
                responseValue={responseValue}
                handleHappinessTracker={handleHappinessTracker}
            />
        ),
        song: (
            <Song
                setQuestionName={setQuestionName}
                responseValue={responseValue}
                handleHappinessTracker={handleHappinessTracker}
            />
        ),
        motivation: (
            <Motivation
                setQuestionName={setQuestionName}
                responseValue={responseValue}
                handleHappinessTracker={handleHappinessTracker}
            />
        ),
    };

    return (
        <Container>
            <Row>
                <Col sm={8}>
                    <div className='chatbox'>
                        {happinessTracker === 'Happy' ? (
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
                                Enter
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
