import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import SharedButton from "../../../Components/Button/Button";
import { bookEventAction } from "../../../store/Events/actions";
import EventImg from "../../../Components/EventImg/EventImg";
import "./EventCard.scss";

const EventCard = ({ event }) => {
  const dispatch = useDispatch();
  const handleBookEvent = (event) => {
    //it isn't the best solution to edit the event data but it is a workaround for now (needed to revisit)
    const seen = new Set();
    let data = event;
    data?.subscriptions?.push({
      name: localStorage.getItem("name"),
      img: localStorage.getItem("img"),
    });

    //to remove dublicated ubscriptions
    const filteredArr = data?.subscriptions?.filter((el) => {
      const duplicate = seen.has(el.img);
      seen.add(el.img);
      return !duplicate;
    });
    dispatch(bookEventAction({ ...data, subscriptions: filteredArr }));
  };
  return (
    <div className="event-card__wrapper bg-white my-3 p-3 box-shadow">
      <EventImg event={event} />

      <div className="event-descreption">
        <h5 className="my-2">{event.name}</h5>
        <p>{event.descreption}</p>
        <Link to={`/event-details?id=${event.id}`}>
          <p className="text-end">See More...</p>
        </Link>
      </div>
      <div className="my-2 text-center">
        <SharedButton
          color="primary px-4"
          text="RSVP"
          onClick={() => handleBookEvent(event)}
        />
      </div>
    </div>
  );
};
export default EventCard;
