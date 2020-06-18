import React, { useContext } from 'react';
import AuthContext from '../../contexts/auth';

const Login = () => {

    const { signed, signIn } = useContext(AuthContext);
    console.log(signed)

    function handleSignIn(){
         signIn();
    } 

    return (
        <div>
            <h1> Página de login</h1>
            <button onClick={handleSignIn}>Login</button>
        </div>
    );
};

export default Login;