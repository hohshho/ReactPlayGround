import React from 'react';
import Card from '../UI/Card';

const UserItem = (props) => {
    return (
        <li>
            <div>{props.name}</div>
            <div>{props.age}</div>
        </li>
    );
};

export default UserItem;
