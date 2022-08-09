import { useState } from 'react';

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

        props.onSaveUserData(userFormData);
        setUserFormData({
            name: '',
            age: '',
        });

        props.changeEditMode();
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <div className="new-user__controls">
                <div className="new-user__control">
                    <label>Username</label>
                    <input type="text" name="name" value={userFormData.name || ''} onChange={onChangeHandler} />
                </div>
                <div className="new-user__control">
                    <label>Age (Years)</label>
                    <input type="number" name="age" value={userFormData.age || ''} onChange={onChangeHandler} />
                </div>
            </div>
            <div className="new-user__actions">
                <button onClick={props.changeEditMode}>Cancel</button>
                <button type="submit">Add User</button>
            </div>
        </form>
    );
};

export default NewUserForm;
