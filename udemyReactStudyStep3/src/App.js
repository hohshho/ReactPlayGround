import React, { useState } from 'react';
import NewUser from './Components/NewUser/NewUser';
import User from './Components/User/User';
import Modal from './Components/UI/Modal';

// DummyData
// import DefaultData from "./DefaultData";
const Dummy = [
    {
        id: Math.random().toString(),
        name: 'Han',
        age: 20,
    },
    {
        id: Math.random().toString(),
        name: 'Park',
        age: 20,
    },
    {
        id: Math.random().toString(),
        name: 'Kim',
        age: 20,
    },
];

function App() {
    const [userListObj, setUserListObj] = useState(Dummy);

    /**
     * 0 : no modal
     * 1 : name error
     * 2 : age error
     */
    const [isModal, setIsModal] = useState('false');

    const addUserListHandler = (user) => {
        setUserListObj((prevState) => {
            return [user, ...prevState];
        });
    };

    const changeModaHandler = (isModal) => {
        // TODO: 이건 맞는지 체크 해야 함
        if (!isModal) {
            isModal = 0;
        }
        setIsModal(isModal);
    };

    return (
        <div>
            <NewUser onAddUser={addUserListHandler} onChangeModal={changeModaHandler} />
            <User users={userListObj} />
            {isModal && <Modal isModal={isModal} />}
        </div>
    );
}

export default App;
