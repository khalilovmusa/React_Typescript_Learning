import { useState } from 'react';

type AuthUser = {
    name: string,
    email: string
}

export const User = () => {

    // const [user, setUser] = useState<AuthUser | null>(null);
    const [user, setUser] = useState<AuthUser>({} as AuthUser);
    const handleLogin = () => {
        setUser({
            name: 'Musa',
            email: 'Musa@example.com'
        })
    }

    // const handleLogOut = () => {
    //     setUser(null)
    // }

    return (
        <div>
            <button onClick={handleLogin} >Login</button>
            {/* <button onClick={handleLogOut}>Logout</button> */}
            <div>User name is { user.name } </div>
            <div>User email is { user.email } </div>
        </div>
    )
}