import Layouts from "./Layouts/Layouts";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getLoginSubmittedDataAction } from "./store/Auth/actions";
import "./App.scss";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const userData = localStorage.getItem("userData");
    userData && dispatch(getLoginSubmittedDataAction(userData));
  }, []);
  return <Layouts />;
};

export default App;
