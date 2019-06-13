import React, { Component } from 'react';

import UserItem from '../users/UserItem';

class Users extends Component {
    state = {
        users: [
            {
                id: '1',
                login: 'mojombo',
                avatar_url: '',
                html_url: 'https://github.com/Belchenkov'
            },
            {
                id: '2',
                login: 'mojombo2',
                avatar_url: '',
                html_url: 'https://github.com/Belchenkov'
            },
            {
                id: '3',
                login: 'mojombo3',
                avatar_url: '',
                html_url: 'https://github.com/Belchenkov'
            }
        ]
    };

    render() {
        return (
            <div style={userStyle}>
                {this.state.users.map(user => (
                    <UserItem user={user} key={user.id} />
                ))}
            </div>
        );
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
};

export default Users;