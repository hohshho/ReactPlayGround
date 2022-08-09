import React, { useState } from 'react';
import Card from '../UI/Card';
import UserItem from './UserItem';

const UserList = (props) => {
    console.log(props.users);

    return (
        <ul>
            {props.users.map((user) => (
                <UserItem key={user.id} name={user.name} age={user.age} />
            ))}
        </ul>
    );
};

export default UserList;
