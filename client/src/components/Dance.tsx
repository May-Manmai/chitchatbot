import axios from 'axios';
import { useEffect } from 'react';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const Dances = ({
    handleHappinessTracker,
    setQuestionName,
    responseValue,
    userName,
}: ComponentWithHappinessTrackerProps) => {
    const [giphyImageUrl, setGiphyImageUrl] = useState('');

    useEffect(() => {
        if (responseValue != '') {
            axios
                .get(`/api/giphy?q=${responseValue}%20dance&limit=10`)
                .then((response) => {
                    console.log(response.data);
                    setGiphyImageUrl(
                        response.data.data[Math.floor(Math.random() * 10)]
                            .images.original.url
                    );
                });
        }
    }, [responseValue]);

    return (
        <div
            style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
            }}>
            <div>
                <h1>😀 : What is your favorite dance?</h1>
                {responseValue != '' && (
                    <h1>
                        {userName}: {responseValue}{' '}
                    </h1>
                )}
            </div>
            <img src={giphyImageUrl} />
            <div style={{ textAlign: 'right', marginRight: '15px' }}>
                <Button
                    onClick={() => {
                        setQuestionName('happinessTracker');
                    }}
                    className='nextButton'
                    variant='outline-light'>
                    Next
                </Button>
            </div>
        </div>
    );
};

export default Dances;
