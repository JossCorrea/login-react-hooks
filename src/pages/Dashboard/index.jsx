import React, { useContext } from 'react';
import AuthContext from '../../contexts/auth';

const Dashboard = () => {

    const { signed, signOut } = useContext(AuthContext);
    console.log(signed)
    function handleSignOut(){
         signOut();
    } 
    
    return (
        <div>
            <h1> Página de Dashboard</h1>
            <button onClick={handleSignOut}>Logout</button>
        </div>
    );
};

export default Dashboard;