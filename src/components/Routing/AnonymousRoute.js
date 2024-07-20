import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticatedSelector } from "redux/selectors";

function AnonymousRoute() {
  const isAuthenticated = useSelector(isAuthenticatedSelector);

  return (
    <>
      {!isAuthenticated ? (
        <>
          <Outlet />
        </>
      ) : (
        <Navigate replace to="/" />
      )}
    </>
  );
}

export default AnonymousRoute;
