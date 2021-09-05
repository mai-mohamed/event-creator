import { useSelector } from "react-redux";
import FullLoader from "../../Components/FullLoader/FullLoader";
import NavBar from "../../Pages/NavBar/NavBar";
import "./MainLayout.scss";

const MainLayout = ({ routes }) => {
  const fullLoader = useSelector((state) => state.loaders?.fullScreenLoader);
  return (
    <div className="main-layout__wrapper">
      {fullLoader && <FullLoader />}
      <NavBar />
      <div className="my-4">{routes}</div>
    </div>
  );
};
export default MainLayout;
