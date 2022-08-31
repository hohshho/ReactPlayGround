import React, { useState } from 'react';
import classes from './NewUserForm.module.css';

import Card from '../UI/Card';

const NewUserForm = (props) => {
    const [userFormData, setUserFormData] = useState({
        name: '',
        age: '',
    });

    const onChangeHandler = (e) => {
        setUserFormData((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value,
            };
        });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        props.changeEditMode();

        // check value
        if (userFormData.name.trim() === '') {
            props.onChangeModal(1);
            return;
        }

        if (userFormData.age < 0) {
            props.onChangeModal(2);
            return;
        }

        props.onSaveUserData(userFormData);
        setUserFormData({
            name: '',
            age: '',
        });
    };

    return (
        <Card className={classes.input}>
            <form onSubmit={onSubmitHandler}>
                <label htmlFor="username">Username</label>
                <input
                    className="input"
                    id="username"
                    type="text"
                    name="name"
                    value={userFormData.name || ''}
                    onChange={onChangeHandler}
                />
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" name="age" value={userFormData.age || ''} onChange={onChangeHandler} />
                <button onClick={props.changeEditMode}>Cancel</button>
                <button type="submit">Add User</button>
            </form>
        </Card>
    );
};

export default NewUserForm;
