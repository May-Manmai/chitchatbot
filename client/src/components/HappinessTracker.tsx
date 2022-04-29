import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function HappinessTracker({
    handleHappinessTracker,
    previousQuestion,
    userName,
}: any) {
    console.log(previousQuestion);
    return (
        <div className='happinessTracker'>
            {previousQuestion === 'animal' && (
                <h3>
                    😀 Botty : That's cute animal, {userName}. Hope it make you
                    feel better?
                </h3>
            )}
            {previousQuestion === 'dance' && (
                <h3>
                    😀 Botty : That's cute dance, {userName}. Hope it make you
                    feel better?
                </h3>
            )}
            {previousQuestion === 'song' && (
                <h3>
                    😀 Botty : You are doing well, {userName} That's cute song.
                    Hope it make you feel better?
                </h3>
            )}
            {previousQuestion === 'motivation' && (
                <h3>
                    😀 Botty : If you're happy and you know it, clap your hands,{' '}
                    {userName}.{' '}
                </h3>
            )}
            {previousQuestion === '' && (
                <h3>😀 Botty : How are you, {userName}?</h3>
            )}
            <div className='happiness_buttons'>
                <Button
                    onClick={() => handleHappinessTracker('Sad')}
                    variant='outline-secondary'>
                    Sad
                </Button>
                {'   '}
                <Button
                    onClick={() => handleHappinessTracker('Neutral')}
                    variant='outline-primary'>
                    Neutral
                </Button>
                {'   '}
                <Button
                    onClick={() => handleHappinessTracker('Happy')}
                    variant='outline-warning'>
                    Happy👏👏👏
                </Button>
                {'   '}
            </div>
        </div>
    );
}

export default HappinessTracker;
