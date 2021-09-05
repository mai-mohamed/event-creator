import { useDispatch } from "react-redux";
import { BsArrowBarRight } from "react-icons/bs";
import { logoutAction } from "../../../store/Auth/actions";
import "./Logout.scss";

const Logout = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutAction());
  };
  return (
    <div className="logout__wrapper">
      <BsArrowBarRight onClick={handleLogout} className="cursor-pointer" />
    </div>
  );
};
export default Logout;
