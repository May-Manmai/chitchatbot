import axios from 'axios';
import { useEffect } from 'react';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const Motivation = ({
    handleHappinessTracker,
    setQuestionName,
    responseValue,
    userName,
}: ComponentWithHappinessTrackerProps) => {
    const [embedYoutubeID, setEmbedYoutubeID] = useState('');
    const [,] = useState('');

    const playlist = [
        `https://www.youtube.com/embed/videoseries?list=PLaP74XGaRZpUVmb7rZGEFvo9y5tzT42_0`,
        `https://www.youtube.com/embed/videoseries?list=PLaP74XGaRZpW3VzmqYTu8KbQIy3ErOXOV`,
        `https://www.youtube.com/embed/videoseries?list=PLJQrUSvEtfThT7XxZxkNkw4D1AJQs1mwu`,
        `https://www.youtube.com/embed/videoseries?list=PLJQrUSvEtfThRUURhl0gkS_EnIAc9r308`,
        `https://www.youtube.com/embed/videoseries?list=PLJQrUSvEtfTjLt5H0cQ6VOCendmy4jUab`,
    ];

    return (
        <div
            style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
            }}>
            <div>
                <h1>😀 : Do you want to watch motivational video?</h1>
                {responseValue != '' && (
                    <h1>
                        {userName}: {responseValue}{' '}
                    </h1>
                )}
            </div>
            {responseValue != '' &&
                responseValue.toLocaleLowerCase() === 'yes' && (
                    <>
                        <iframe
                            width='90%'
                            height='500px'
                            src={playlist[Math.floor(Math.random() * 4)]}
                            title='YouTube video player'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'></iframe>
                        <Button
                            onClick={() => {
                                setQuestionName('happinessTracker');
                            }}
                            className='nextButton'
                            variant='outline-light'>
                            Next
                        </Button>
                    </>
                )}{' '}
            <div style={{ textAlign: 'right', marginRight: '15px' }}></div>
            {responseValue.toLocaleLowerCase() === 'no' &&
                setQuestionName('happinessTracker')}
        </div>
    );
};

export default Motivation;
