import React from 'react';
import { Redirect, Route } from 'react-router';
import { withAuth } from '../../context/auth.context';

function AnonRoute(routeProps) {
  const { isLoggedIn, isLoading } = routeProps;
  const { exact, path } = routeProps;
  const ComponentToShow = routeProps.component;
  if (isLoading) return <p>loading...</p>;
  return (
    <Route
      exact={exact}
      path={path}
      render={function (props) {
        if (isLoggedIn) return <Redirect to="/profile" />;
        else if (!isLoggedIn) return <ComponentToShow {...props} />;
      }}
    />
  );
}
export default withAuth(AnonRoute);
