import { combineReducers } from "redux";
import charactersReducer from "./characters";
import reduceReducers from "reduce-reducers";
import filmsReducer from "./films";

const rootReducer = combineReducers({
  data: reduceReducers(charactersReducer,filmsReducer)
});

export default rootReducer;