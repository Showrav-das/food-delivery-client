import React,{createContext} from 'react';
import UseFirebase from '../Hooks/UseFirebase';
// import UseFirebase from '../Hooks/useFirebase.js';


export const AuthContext = createContext();
const AuthProvides = ({ children }) => {
    const allContext = UseFirebase();
    // console.log(allContext);
    return (
        <div>
            <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
        </div>
    );
};

export default AuthProvides;