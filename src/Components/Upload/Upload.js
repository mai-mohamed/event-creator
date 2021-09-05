import ImageUploading from "react-images-uploading";
import { BsCamera, BsXSquareFill } from "react-icons/bs";
import "./Upload.scss";

const Upload = ({ image, onChange, errorMesg }) => {
  return (
    <div className="upload__wrapper">
      <ImageUploading value={image} onChange={onChange} dataURLKey="data_url">
        {({ imageList, onImageUpload, onImageRemove, dragProps }) => (
          <div>
            {!imageList[0]?.data_url && (
              <div
                onClick={onImageUpload}
                {...dragProps}
                className="upload-icon d-flex align-items-center justify-content-center cursor-pointer"
              >
                <BsCamera />
              </div>
            )}
            {imageList[0]?.data_url && (
              <div className="uploaded-img">
                <img src={imageList[0]?.data_url} />
                <div className="remove-overlay">
                  <div className="text-end px-3 py-1">
                    <span
                      onClick={() => onImageRemove()}
                      className="remove-icon "
                    >
                      <BsXSquareFill />
                    </span>
                  </div>
                </div>
              </div>
            )}
            <small className="error">{errorMesg}</small>
          </div>
        )}
      </ImageUploading>
    </div>
  );
};

export default Upload;
