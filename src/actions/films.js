import { FETCH_FILMS_LIST_PENDING, FETCH_FILMS_LIST_SUCCESS } from "../_helpers/constants";
import axios from "axios";

export const fetchFilmsListPending = () => {
    return {
      type: FETCH_FILMS_LIST_PENDING,
    };
  };


  export const fetchFilmsListSuccess = (data) => {
    return {
      type: FETCH_FILMS_LIST_SUCCESS,
      payload: data
    };
  };

  export const fetchFilmsList = (filmsUrl) => (dispatch) => {
    dispatch(fetchFilmsListPending);
    let requests = filmsUrl.map(url => axios.get(url));
    Promise.all(requests).then((data) => dispatch(fetchFilmsListSuccess(data))
    );
  }