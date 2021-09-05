import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import moment from "moment-timezone";
import { useDispatch } from "react-redux";
import { Form } from "react-bootstrap";
import { BsArrowLeftShort } from "react-icons/bs";
import ReactDatePicker from "react-datepicker";
import Upload from "../../../Components/Upload/Upload";
import InputText from "../../../Components/InputText/InputText";
import SharedButton from "../../../Components/Button/Button";
import { submitCreateEventAction } from "../../../store/Events/actions";
import { setFullScreenLoaderAction } from "../../../store/Loaders/actions";
import "react-datepicker/dist/react-datepicker.css";
import "./CreateEvent.scss";

const CreateEvent = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState([]);
  const [imgErr, setImgErr] = useState(null);
  const handleUploadChange = (imageList) => {
    setImgErr(null);
    setImage(imageList);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({ mode: "onChange", criteriaMode: "all" });
  const onSubmit = (data) => {
    if (image?.length == 0) {
      setImgErr(" event image is required");
    } else {
      dispatch(setFullScreenLoaderAction(true));
      const submitedData = {
        mainData: {
          ...data,
          subscriptions: [],
          date: moment(data.date).format("DD/MMM/YYYY"),
        },
        img: image[0],
      };
      dispatch(submitCreateEventAction(submitedData));
    }
  };

  return (
    <div className="create-event__wrapper py-4">
      <div className="container">
        <div className="d-flex align-items-center">
          <Link to="/events">
            <BsArrowLeftShort className="back-icon" />
          </Link>
          <h5 className="mb-0">Create Event</h5>
        </div>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-8">
              <div className="p-5 box-shadow my-2 bg-white create-form">
                <InputText
                  label="Name"
                  asterisk={true}
                  type="text"
                  placeholder=" Name"
                  controls={register("name", {
                    required: true,
                  })}
                  errorMsg={
                    errors?.name?.type === "required" && "name is required"
                  }
                />
                <InputText
                  label="Type"
                  asterisk={true}
                  type="text"
                  placeholder="Type"
                  controls={register("type", {
                    required: true,
                  })}
                  errorMsg={
                    errors?.type?.type === "required" && "type is required"
                  }
                />

                <InputText
                  label="Caption"
                  type="text"
                  placeholder=" Caption"
                  controls={register("caption")}
                />
                <InputText
                  label=" City"
                  asterisk={true}
                  type="text"
                  placeholder="City"
                  controls={register("city", {
                    required: true,
                  })}
                  errorMsg={
                    errors?.city?.type === "required" && "city is required"
                  }
                />
                <InputText
                  label=" Time"
                  asterisk={true}
                  type="time"
                  placeholder="Time"
                  controls={register("time", {
                    required: true,
                  })}
                  errorMsg={
                    errors?.time?.type === "required" && "time is required"
                  }
                />
                <div className="mb-3">
                  <label>
                    Date
                    <span className="error">*</span>
                  </label>
                  <Controller
                    control={control}
                    name="date"
                    render={({ field }) => (
                      <ReactDatePicker
                        className="form-control w-100"
                        placeholderText="Select date"
                        controls={register("date", {
                          required: true,
                        })}
                        onChange={(e) => field.onChange(e)}
                        selected={field.value}
                      />
                    )}
                  />
                  {errors?.date === "required" && (
                    <small className="error d-block">date is required</small>
                  )}
                </div>
                <InputText
                  label="Cost($)"
                  asterisk={true}
                  type="number"
                  placeholder="Cost"
                  controls={register("cost", {
                    required: true,
                  })}
                  errorMsg={
                    errors?.cost?.type === "required" && "cost is required"
                  }
                />
                <InputText
                  label=" Descreption"
                  type="text"
                  asterisk={true}
                  textarea={true}
                  placeholder=" Descreption"
                  controls={register("descreption", {
                    required: true,
                  })}
                  errorMsg={
                    errors?.descreption?.type === "required" &&
                    "descreption is required"
                  }
                />
                <div className="text-end">
                  <SharedButton
                    type="submit"
                    color="primary"
                    className="btn  my-3 px-5 "
                    text="Submit"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4 order-first order-lg-last order-md-last">
              <Upload
                image={image}
                onChange={handleUploadChange}
                errorMesg={imgErr}
              />
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default CreateEvent;
