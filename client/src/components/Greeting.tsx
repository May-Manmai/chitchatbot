import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

const Greeting = ({
    setQuestionName,
    responseValue,
    setUserName,
    setResponseValue,
}: any) => {
    useEffect(() => {
        if (responseValue != '') {
            setUserName(responseValue);
            setResponseValue('');
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
                <h3>😀 : Hi there! My name is Botty. What is your name?</h3>
            </div>
            {responseValue != '' && (
                <>
                    <h3>
                        😀 : That is very cute name. Nice to meet you!{' '}
                        {responseValue} Are you ready to be happy?
                    </h3>
                </>
            )}{' '}
            <div style={{ textAlign: 'right', marginRight: '15px' }}></div>
            {responseValue.toLocaleLowerCase() === 'yes' &&
                setQuestionName('happinessTracker')}
        </div>
    );
};

export default Greeting;
