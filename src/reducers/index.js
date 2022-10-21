import { combineReducers } from "redux";
import charactersReducer from "./characters";
import reduceReducers from "reduce-reducers";
import filmsReducer from "./films";
import vehiclesReducer from "./vehicles";

const rootReducer = combineReducers({
  data: reduceReducers(charactersReducer, filmsReducer, vehiclesReducer)
});

export default rootReducer;