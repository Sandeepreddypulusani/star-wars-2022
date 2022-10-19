import { FETCH_CHARACTERS_LIST_PENDING, FETCH_CHARACTERS_LIST_SUCCESS } from "../_helpers/constants";
import defaultState from "./defaultState";

const charactersReducer = (state = defaultState, action) => {
    switch (action.type) {
      case FETCH_CHARACTERS_LIST_PENDING:
        return {
          ...state,
          charactersList: [],
          charactersListLoaded: false,
        };
      case FETCH_CHARACTERS_LIST_SUCCESS:
        return {
          ...state,
          charactersList: action.payload,
          charactersListLoaded: true,
        };
      default:
        return state;
    }
  };
  
  export default charactersReducer;