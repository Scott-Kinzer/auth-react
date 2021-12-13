import React from 'react';
import { useAuth } from '../AuthContext/AuthContextFC';

function UserAccount(props) {

    let {userInformation} = useAuth();
    console.log(userInformation);
    return (
        <div>
            <div>${userInformation.email}</div>
        </div>
    );
}

export default UserAccount;