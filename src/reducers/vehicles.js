import { FETCH_VEHICLES_LIST_PENDING, FETCH_VEHICLES_LIST_SUCCESS, TOGGLE_VEHICLES_MODAL } from "../_helpers/constants";
import defaultState from "./defaultState";

const vehiclesReducer = (state = defaultState, action) => {
    switch (action.type) {
      case FETCH_VEHICLES_LIST_PENDING:
        return {
          ...state,
          vehiclesList: [],
          vehiclesListLoaded: false,
        };
      case FETCH_VEHICLES_LIST_SUCCESS:
        return {
          ...state,
          vehiclesList: action.payload,
          vehiclesListLoaded: true,
        };
        case TOGGLE_VEHICLES_MODAL:
        return {
          ...state,
          openVehiclesModal: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default vehiclesReducer;