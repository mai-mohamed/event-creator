import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BsArrowLeftShort } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

import { getURLParams } from "../../../utils/helpers";
import EventImg from "../../../Components/EventImg/EventImg";
import { getEventDetailsAction } from "../../../store/Events/actions";
import { setFullScreenLoaderAction } from "../../../store/Loaders/actions";
import "./EventDetails.scss";

const EventDetails = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setFullScreenLoaderAction(true));
    const eventId = getURLParams("id");
    dispatch(getEventDetailsAction({ id: eventId }));
  }, []);
  const event = useSelector((state) => state.events?.eventDetails);
  return (
    <div className="event-details__wrapper">
      <div className="container">
        <div className="d-flex align-items-center">
          <Link to="/events">
            <BsArrowLeftShort className="back-icon" />
          </Link>
          <h5 className="mb-0">Event Details</h5>
        </div>
        <div className="row mt-2">
          <div className="col-lg-6">
            <div className="box-shadow bg-white p-5 details-card">
              <EventImg event={event} />

              <p className="my-3">{event?.descreption}</p>
              <div className="row">
                <div className="col-6">
                  <h5>event type</h5>
                  <p>{event?.type}</p>
                </div>
                <div className="col-6">
                  <h5>admission cost</h5>
                  <p>${event?.cost}</p>
                </div>
              </div>

              <div className="row my-2">
                <div className="col-6">
                  <h5>date</h5>
                  <p>{event?.date}</p>
                </div>
                <div className="col-6">
                  <h5>time</h5>
                  <p>{event?.time}</p>
                </div>
              </div>
              <div>
                <h5>location</h5>
                <p>{event?.city}</p>
              </div>
              <div className="my-2">
                {event?.subscriptions?.length > 0 && <h5>members attending</h5>}
                <div className="d-flex">
                  {event?.subscriptions?.map((subscrib, i) => (
                    <div key={i} className="subscrip-img">
                      {subscrib?.img && (
                        <img
                          src={subscrib.img}
                          alt={subscrib.name}
                          className="img-fluid"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 text-end">
            <img
              src="assets/imgs/details-img.png"
              alt="details"
              className="img-fluid d-lg-block d-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default EventDetails;
