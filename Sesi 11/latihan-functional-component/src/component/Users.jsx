import React, { useState } from 'react';

function Users(){
    const [user, setUser] = useState('user01')

    let setUsername = () => {
        let tempUser = "user99"
        setUser(tempUser)
    }

    let resetUsername = () => {
        let tempUser = "user01"
        setUser(tempUser)
    }

    return(
        <div>
            <div>
                <h1>{user}</h1>
                <button onClick={() => setUsername()}>Set Username</button>
                <button onClick={() => resetUsername()}>Reset Username</button>
            </div>
        </div>
    )
}

export default Users;