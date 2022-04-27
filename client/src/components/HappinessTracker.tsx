import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function HappinessTracker({ handleHappinessTracker, previousQuestion }: any) {
    console.log(previousQuestion);
    return (
        <div className='happinessTracker'>
            {previousQuestion === 'animal' && (
                <h2>That's cute animal. Hope it make you feel better?</h2>
            )}
            {previousQuestion === 'dance' && (
                <h2>That's cute dance. Hope it make you feel better?</h2>
            )}
            {previousQuestion === 'song' && (
                <h2>That's cute song. Hope it make you feel better?</h2>
            )}
            {previousQuestion === 'motivation' && (
                <h2>That's cute motivation. Hope it make you feel better?</h2>
            )}
            {previousQuestion === '' && <h2>How are you?</h2>}
            <Button
                onClick={() => handleHappinessTracker('Sad')}
                variant='outline-secondary'>
                Sad
            </Button>{' '}
            <Button
                onClick={() => handleHappinessTracker('Neutral')}
                variant='outline-primary'>
                Neutral
            </Button>{' '}
            <Button
                onClick={() => handleHappinessTracker('Happy')}
                variant='outline-warning'>
                Happy
            </Button>{' '}
        </div>
    );
}

export default HappinessTracker;
