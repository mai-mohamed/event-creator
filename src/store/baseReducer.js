import { combineReducers } from "redux";
import auth from "./Auth/reducer";
import events from "./Events/reducer";
import loaders from "./Loaders/reducer";

export default combineReducers({
  auth,
  events,
  loaders,
});
