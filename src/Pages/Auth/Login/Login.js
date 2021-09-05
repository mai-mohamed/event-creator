import { useDispatch } from "react-redux";
import { submitLoginAction } from "../../../store/Auth/actions";
import "./Login.scss";

const Login = () => {
  const dispatch = useDispatch();
  const handleGoogleLogin = () => {
    dispatch(submitLoginAction());
  };
  return (
    <div className="login__wrapper">
      <button onClick={handleGoogleLogin} className="px-5 py-2">
        <img src="assets/icons/google.svg" alt="google icon" className="me-2" />
        Sign in with Google
      </button>
    </div>
  );
};
export default Login;
