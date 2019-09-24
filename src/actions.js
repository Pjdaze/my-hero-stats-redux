import {
  CHANGE_SEARCH_FIELD,
  REQUEST_HEROES_PENDING,
  REQUEST_HEROES_SUCCESS,
  REQUEST_HEROES_FAILED,
  SET_CURRENT_HERO,
  TOGGLE
} from "./constants";

//for search box
export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

//This one is to fetch data from api

export const requestHeroes = () => dispatch => {
  dispatch({ type: REQUEST_HEROES_PENDING });
  fetch("https://akabab.github.io/superhero-api/api/all.json")
    .then(res => res.json())
    .then(data => dispatch({ type: REQUEST_HEROES_SUCCESS, payload: data }))
    .catch(err => dispatch({ type: REQUEST_HEROES_FAILED, payload: err }));
};

export const setHeroID = event => ({
  type: SET_CURRENT_HERO,
  payload: event
});

export const setOnClick = () => dispatch => {
  dispatch({ type: TOGGLE, payload: setHeroID.payload });
};
