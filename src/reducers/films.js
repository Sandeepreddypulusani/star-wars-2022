import { FETCH_FILMS_LIST_PENDING, FETCH_FILMS_LIST_SUCCESS, TOGGLE_FILMS_MODAL } from "../_helpers/constants";
import defaultState from "./defaultState";

const filmsReducer = (state = defaultState, action) => {
    switch (action.type) {
      case FETCH_FILMS_LIST_PENDING:
        return {
          ...state,
          filmsList: [],
          filmsListLoaded: false,
        };
      case FETCH_FILMS_LIST_SUCCESS:
        return {
          ...state,
          filmsList: action.payload,
          filmsListLoaded: true,
        };
        case TOGGLE_FILMS_MODAL:
        return {
          ...state,
          openFilmsModal: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default filmsReducer;