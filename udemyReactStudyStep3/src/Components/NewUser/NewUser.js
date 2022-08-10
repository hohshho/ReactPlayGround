import React, { useState } from 'react';

import styles from './NewUser.module.css';
import NewUserForm from './NewUserForm';

const NewUser = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveUserHandler = (enteredUser) => {
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
            {isEditing && (
                <NewUserForm
                    onChangeModal={props.onChangeModal}
                    changeEditMode={isEditingHandler}
                    onSaveUserData={saveUserHandler}
                />
            )}
        </div>
    );
};

export default NewUser;
