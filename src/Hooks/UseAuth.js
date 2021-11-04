import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvides';

const UseAuth = () => {
    return useContext(AuthContext);
};

export default UseAuth;