import axios from 'axios';
import { useEffect } from 'react';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const Song = ({
    handleHappinessTracker,
    setQuestionName,
    responseValue,
    userName,
}: ComponentWithHappinessTrackerProps) => {
    const [embedYoutubeID, setEmbedYoutubeID] = useState('');
    const [,] = useState('');
    // const youtubeUrl = `https://www.youtube.com/embed/${embedYoutubeID}?autoplay=1`;

    const youtubeUrl = `https://www.youtube.com/embed/${embedYoutubeID}`;
    useEffect(() => {
        if (responseValue != '') {
            axios
                .get(`/api/youtube?q=song%20${responseValue}`)
                .then((response) => {
                    setEmbedYoutubeID(response.data.items[0].id.videoId);
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
                <h1>😀 : What is your favorite song?</h1>
                {responseValue != '' && (
                    <h1>
                        {userName}: {responseValue}{' '}
                    </h1>
                )}
            </div>
            <iframe
                src={youtubeUrl}
                width='90%'
                height='500px'
                allow='autoplay; encrypted-media'
            />{' '}
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

export default Song;
