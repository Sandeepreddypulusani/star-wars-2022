import { combineReducers } from "redux";
import charactersReducer from "./characters";
// import filmsReducer from "./films";

const rootReducer = combineReducers({
  data: charactersReducer
});

export default rootReducer;