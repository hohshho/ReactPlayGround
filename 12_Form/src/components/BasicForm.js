import useBasicInput from '../hooks/use-basicinput';

const BasicForm = (props) => {
    const {
        value: enteredFirstName,
        hasError: firstNameInputHasError,
        isValid: enteredFirstNameIsValid,
        valueChangeHandler: firstNameChangeHandler,
        inputBlurHandler: firstNameBlurHandler,
        reset: resetFirstNameInput,
    } = useBasicInput((value) => value.trim() !== '');

    const {
        value: enteredLastName,
        hasError: lastNameInputHasError,
        isValid: enteredLastNameIsValid,
        valueChangeHandler: lastNameChangeHandler,
        inputBlurHandler: lastNameBlurHandler,
        reset: resetLastNameInput,
    } = useBasicInput((value) => value.trim() !== '');

    const {
        value: enteredEmail,
        hasError: emailInputHasError,
        isValid: enteredEmailIsValid,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput,
    } = useBasicInput((value) => value.includes('@'));

    let formIsValid = false;

    if (enteredFirstName && enteredLastName && enteredEmail) {
        formIsValid = true;
    }

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        if (!enteredFirstNameIsValid || !enteredLastNameIsValid || !enteredEmailIsValid) {
            return;
        }

        resetFirstNameInput();
        resetLastNameInput();
        resetEmailInput();
    };

    const firstNameClasses = firstNameInputHasError ? 'form-control invalid' : 'form-control';
    const lastNameClasses = lastNameInputHasError ? 'form-control invalid' : 'form-control';
    const emailNameClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={firstNameClasses}>
                <label htmlFor="firstname">First Name</label>
                <input
                    type="text"
                    id="firstname"
                    value={enteredFirstName}
                    onChange={firstNameChangeHandler}
                    onBlur={firstNameBlurHandler}
                />
                {firstNameInputHasError && <p className="error-text">Name must not be empty</p>}
            </div>
            <div className={lastNameClasses}>
                <label htmlFor="lastname">Last Name</label>
                <input
                    type="text"
                    id="lastname"
                    value={enteredLastName}
                    onChange={lastNameChangeHandler}
                    onBlur={lastNameBlurHandler}
                />
                {lastNameInputHasError && <p className="error-text">Name must not be empty</p>}
            </div>
            <div className={emailNameClasses}>
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
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
