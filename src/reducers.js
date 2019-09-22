import {
  CHANGE_SEARCH_FIELD,
  REQUEST_HEROES_PENDING,
  REQUEST_HEROES_SUCCESS,
  REQUEST_HEROES_FAILED,
  SET_CURRENT_HERO,
  CLICK_OFF,
  CLICK_ON
} from "./constants";

const searchInitialState = {
  searchField: ""
};

const heroesInitialState = {
  isPending: false,
  heroes: [],
  err: ""
};

const heroIdInitialState = {
  cardToFlip: ""
};

const clickInitialState = {
  flipped: false,
  cardToFlip: ""
};

//////Here i use default params in case state or action is empty
export const searchHeroes = (state = searchInitialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };

    default:
      return state;
  }
};

export const requestHeroes = (state = heroesInitialState, action = {}) => {
  switch (action.type) {
    case REQUEST_HEROES_PENDING:
      return { ...state, isPending: true };
    case REQUEST_HEROES_SUCCESS:
      return { ...state, heroes: action.payload, isPending: false };

    case REQUEST_HEROES_FAILED:
      return { ...state, err: action.payload, isPending: false };

    default:
      return state;
  }
};

export const setHero = (state = heroIdInitialState, action = {}) => {
  switch (action.type) {
    case SET_CURRENT_HERO:
      console.log("PAYLOADDDDDD", action.payload);
      return { ...state, cardToFlip: action.payload };

    default:
      return state;
  }
};
export const setOnClick = (state = clickInitialState, action = {}) => {
  switch (action.type) {
    case CLICK_OFF:
      return { ...state, flipped: !state.flipped };

    default:
      return state;
  }
};