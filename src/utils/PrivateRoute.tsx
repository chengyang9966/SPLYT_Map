import { Route, Redirect } from "react-router-dom";
import { RouteProps } from "../Types";

const PrivateRoute = ({ children, auth, ...rest }: RouteProps) => {
  return (
    <Route
      {...rest}
      render={() =>
        auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        )
      }
    />
  );
};
export default PrivateRoute;
