import { useState } from 'react';
import Card from '../UI/Card';
import UserList from './UserList';

const User = (props) => {
    return (
        <div>
            <Card>
                <UserList users={props.users} />
            </Card>
        </div>
    );
};

export default User;
