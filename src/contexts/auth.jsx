import React, { createContext, useState, useEffect } from "react";
import AuthService from "../services/auth";

const AuthContext = createContext({ signed: true });

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(()=>{
    function loadStoragedData(){
      const storagedUser = localStorage.getItem('@CV:authUser');
      const storagedToken = localStorage.getItem('@CV:authToken');

      if (storagedUser && storagedToken){
        setUser(JSON.parse(storagedUser))
      }
    }
    loadStoragedData();
  },[]);

  async function signIn(){
    const response = await AuthService.authenticate();
    
    setUser(response.user);
    localStorage.setItem('@CV:authUser',JSON.stringify(response.user))
    localStorage.setItem('@CV:authToken', response.token )
  }

  function signOut(){  
    setUser(null);
    localStorage.clear();
  }

  return (
    <AuthContext.Provider value={{ signed: !!user , user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
