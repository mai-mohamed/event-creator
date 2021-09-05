import moment from "moment-timezone";
import "./EventImg.scss";

const EventImg = ({ event }) => {
  return (
    <div className="event-img">
      <img src={event.img} alt="event img" />
      <div className="event-img__overlay">
        <div className="event-cap d-flex align-items-center justify-content-center flex-column">
          <h5>{event?.caption}</h5>
          <p>{event.city}</p>
        </div>
        <div className="event-date d-flex align-items-center justify-content-center flex-column">
          <p className="event-month mb-0">
            {event?.date && moment(event?.date).format("MMM")}
          </p>
          <p className="event-day mb-0">
            {event?.date && moment(event?.date).format("DD")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventImg;
