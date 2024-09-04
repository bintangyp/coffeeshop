import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";

function PrivatRoute({ component: Component, ...restProps }) {
  const [currentUser, setCurrentUser] = useState([]);

  setCurrentUser("bintang");
  console.log(currentUser);

  return (
    <Route
      {...restProps}
      render={(props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        );
      }}
    />
  );
}

export default PrivatRoute;
