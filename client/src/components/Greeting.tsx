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
        <div>
            <div>
                <h3>
                    😀 Botty : Hi there! My name is Botty. What is your name?
                </h3>
            </div>
            {/* {responseValue != '' && (
                <h3>
                    😀 : That is very cute name. Nice to meet you!{' '}
                    {responseValue} Are you ready to be happy?
                </h3>
            )}
            {responseValue.toLocaleLowerCase() === 'yes' &&
                setQuestionName('happinessTracker')} */}
        </div>
    );
};

export default Greeting;
