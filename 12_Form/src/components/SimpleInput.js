import { useEffect, useState } from 'react';

import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
    const {
        value: enteredName,
        hasError: nameInputHasError,
        isValid: enteredNameIsValid,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput,
    } = useInput((value) => value.trim() !== '');

    const {
        value: enteredEmail,
        hasError: emailInputHasError,
        isValid: enteredEmailIsValid,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput,
    } = useInput((value) => value.includes('@'));

    let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        if (!enteredNameIsValid || !enteredEmailIsValid) {
            return;
        }

        // Ref로 직접 DOM을 조작하는 방법은 좋은 방법이 아님 -> 직접 상태 변경하는 방법 추천
        // nameInputRef.current.value = '';
        resetNameInput();
        resetEmailInput();
    };

    const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
    const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={emailInputClasses}>
                <label htmlFor="email">Your Email</label>
                <input
                    type="text"
                    id="email"
                    value={enteredEmail}
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                />
                {emailInputHasError && <p className="error-text">Name must not be empty</p>}
            </div>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    value={enteredName}
                    onChange={nameChangeHandler}
                    onBlur={nameBlurHandler}
                />
                {nameInputHasError && <p className="error-text">Name must not be empty</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
