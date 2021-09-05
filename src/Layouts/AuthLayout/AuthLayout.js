import "./AuthLayout.scss";
const AuthLayout = ({ routes }) => {
  return (
    <div className="auth-layout__wrapper">
      <div className="container-fluid">
        <div className="row d-flex align-items-center justify-content-between auth-layout__wrapper">
          <div className="col-md-5">
            <h1 className="mb-4">
              Lorem Ipsum is simply dummy text of the printing
            </h1>
            <div>{routes}</div>
          </div>
          <div className="col-md-6 d-md-block d-none">
            <div className="view-side d-flex align-items-center justify-content-center ">
              <img
                src="assets/imgs/login-img.jfif"
                className="img-fluid w-75"
                alt="login img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AuthLayout;
