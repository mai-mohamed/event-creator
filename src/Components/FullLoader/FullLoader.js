import "./FullLoader.scss";
import { Spinner } from "react-bootstrap";
const FullLoader = () => {
  return (
    <div className="full-loader__wrapper d-flex align-items-center justify-content-center">
      <Spinner animation="border" variant="warning" size="lg" />
    </div>
  );
};
export default FullLoader;
