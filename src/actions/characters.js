import { FETCH_CHARACTERS_LIST_PENDING, FETCH_CHARACTERS_LIST_SUCCESS, SET_CHARACTER_DATA } from "../_helpers/constants";
import axios from "axios";

export const fetchCharactersListPending = () => {
    return {
      type: FETCH_CHARACTERS_LIST_PENDING,
    };
  };


  export const fetchCharactersListSuccess = (data) => {
    return {
      type: FETCH_CHARACTERS_LIST_SUCCESS,
      payload: data
    };
  };

  export const setCharacterData = (dataUID) => {
    return {
      type: SET_CHARACTER_DATA,
      payload: dataUID
    };
  };

  export const fetchCharactersList = () => (dispatch) => {
    dispatch(fetchCharactersListPending);
    axios
      .get("https://swapi.dev/api/people/")
      .then((response) => {
        const characters = response.data.results;
        dispatch(fetchCharactersListSuccess(characters));
      })
      .catch((error) => {
        const errorMsg = error.message;
        console.error(errorMsg);
      });
  }