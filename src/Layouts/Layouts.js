import { Router } from "react-router-dom";
import { useSelector } from "react-redux";
import Routes from "./../Routes/Routes";
import history from "./../Routes/History";
import AuthLayout from "./AuthLayout/AuthLayout";
import MainLayout from "./MainLayout/MainLayout";

const Layouts = () => {
  const isAuthenticated = useSelector((state) => state.auth?.auth);
  return (
    <Router history={history}>
      {isAuthenticated !== null ? (
        <MainLayout routes={<Routes />} />
      ) : (
        <AuthLayout routes={<Routes />} />
      )}
    </Router>
  );
};
export default Layouts;
