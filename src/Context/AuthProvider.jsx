import React from 'react';
import { AuthContext } from './CreateContex';

const AuthProvider = ({children}) => {
    const userInfo = {
        user: "name"
    }
    return (
        <div>
            <AuthContext value={userInfo}>
                {children}
            </AuthContext>
        </div>
    );
};

export default AuthProvider;