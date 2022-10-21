import { FETCH_VEHICLES_LIST_PENDING, FETCH_VEHICLES_LIST_SUCCESS, TOGGLE_VEHICLES_MODAL } from "../_helpers/constants";
import axios from "axios";

export const fetchVehiclesListPending = () => {
    return {
      type: FETCH_VEHICLES_LIST_PENDING,
    };
  };

  export const fetchVehiclesListSuccess = (data) => {
    return {
      type: FETCH_VEHICLES_LIST_SUCCESS,
      payload: data
    };
  };

  export const toggleVehiclesModal = (open) => {
    return {
      type: TOGGLE_VEHICLES_MODAL,
      payload: open
    };
  };

  export const fetchVehiclesList = (vehcilesURL) => (dispatch) => {
    dispatch(fetchVehiclesListPending);
    let requests = vehcilesURL.map(url => axios.get(url));
    Promise.all(requests).then((data) => dispatch(fetchVehiclesListSuccess(data))
    );
  }