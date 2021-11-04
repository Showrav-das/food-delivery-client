import React from 'react';
import { Button } from 'react-bootstrap';
import UseAuth from '../../../Hooks/UseAuth';
// import UseFirebase from '../../../Hooks/UseFirebase';
// import UseFirebase from '';
import firebaseAuthentication from '../Firebase/Firebase.int';

firebaseAuthentication();
const Login = () => {
    // const { signInGoogle, users } = UseAuth();
    // const { signInGoogle, users } = UseFirebase();
    const { signInGoogle, users } = UseAuth();
    return (  
        <div>
            <h2>Please login.</h2> <br />
            <Button className="ps-5 pe-5" onClick={ signInGoogle}>Google</Button>
        </div>
    );
};

export default Login;