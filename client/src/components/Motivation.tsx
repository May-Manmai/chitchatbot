import axios from 'axios';
import { useEffect } from 'react';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const Motivation = ({
    handleHappinessTracker,
    setQuestionName,
    responseValue,
}: ComponentWithHappinessTrackerProps) => {
    const [embedYoutubeID, setEmbedYoutubeID] = useState('');
    const [,] = useState('');

    const youtubeUrl = `https://www.youtube.com/embed/videoseries?list=PLaP74XGaRZpUVmb7rZGEFvo9y5tzT42_0?autoplay=1`;
    // useEffect(() => {
    //     if (
    //         responseValue != '' &&
    //         responseValue.toLocaleLowerCase() === 'yes'
    //     ) {
    //         axios.get(`/api/youtube/motivation?`).then((response) => {
    //             setEmbedYoutubeID(response.data.items[0].id);
    //         });
    //     }
    // }, [responseValue]);

    return (
        <div
            style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
            }}>
            <div>
                <h1>Do you want to watch motivational video?</h1>
            </div>
            {responseValue != '' &&
                responseValue.toLocaleLowerCase() === 'yes' && (
                    <>
                        <iframe
                            width='90%'
                            height='500px'
                            src='https://www.youtube.com/embed/videoseries?list=PLaP74XGaRZpUVmb7rZGEFvo9y5tzT42_0'
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
