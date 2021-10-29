import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const PrivetRoute = ({children, ...rest}) => {
    const{user , isLoading} = useAuth();

    if (isLoading) {
        return <Spinner animation="border" variant="warning" className="mt-5 pt-5" />
    }
    return (
        
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>
            }>

        </Route>
        
    );
};

export default PrivetRoute;
