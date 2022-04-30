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
                    😀 Botty : Awwww very cute animal! How are you feeling now?
                </h3>
            )}
            {previousQuestion === 'dance' && (
                <h3>
                    😀 Botty : I saw that you've just danced, {userName}!! What
                    emotion is coming up for you now?
                </h3>
            )}
            {previousQuestion === 'song' && (
                <h3>
                    😀 Botty : Oh yeah! This song is sick, {userName}. How are
                    you feeling now after listening to it?
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
