import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import EventCard from "../EventCard/EventCard";
import { getAllEventsAction } from "../../../store/Events/actions";
import { setFullScreenLoaderAction } from "../../../store/Loaders/actions";
import "./ListEvents.scss";

const ListEvents = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setFullScreenLoaderAction(true));
    dispatch(getAllEventsAction());
  }, []);
  const events = useSelector((state) => state.events?.allEvents);
  return (
    <div className="list-events__wrapper">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-6">
            <Link to="create-event">
              <div className="create-event-card bg-white box-shadow my-3 d-flex align-items-center justify-content-center flex-column">
                <BsFillPlusSquareFill />
                <p className=" mt-3">Create Event</p>
              </div>
            </Link>
          </div>
          {events?.map((event, i) => {
            return (
              <div className="col-xl-4 col-lg-6 col-md-6" key={i}>
                <EventCard event={event} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ListEvents;
