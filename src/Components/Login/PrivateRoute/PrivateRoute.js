import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Route,Redirect } from 'react-router';
import UseAuth from '../../../Hooks/UseAuth';
// import UseFirebase from '../../Hooks/UseFirebase';

const PrivateRoute = ({ children, ...rest }) => {
    const { users, isLoad } = UseAuth();
  if (isLoad) {
    return <Spinner animation="border" variant="info" />;
    }
    return (
      <div>
        <Route
          {...rest}
          render={({ location }) =>
            users?.displayName ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: location }
                }}
              />
            )
          }
        />
      </div>
    );
  };

export default PrivateRoute;