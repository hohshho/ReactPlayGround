import React, { useState } from 'react';

import styles from './NewUser.module.css';
import NewUserForm from './NewUserForm';

const NewUser = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveUserHandler = (enteredUser) => {
        // check value
        if (enteredUser.name.trim() === '') {
            props.onChangeModal(1);
            return;
        }

        let userData = {
            ...enteredUser,
            id: Math.random().toString(),
        };

        props.onAddUser(userData);
        setIsEditing('false');
    };

    const isEditingHandler = (isEditing) => {
        setIsEditing((prevIsEditing) => {
            return !prevIsEditing;
        });
    };

    return (
        <div>
            {!isEditing && <button onClick={isEditingHandler}>Add New User</button>}
            {isEditing && <NewUserForm changeEditMode={isEditingHandler} onSaveUserData={saveUserHandler} />}
        </div>
    );
};

export default NewUser;
