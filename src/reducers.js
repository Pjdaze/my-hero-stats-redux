import {
  CHANGE_SEARCH_FIELD,
  REQUEST_HEROES_PENDING,
  REQUEST_HEROES_SUCCESS,
  REQUEST_HEROES_FAILED,
  SET_CURRENT_HERO,
  CLOSE_HERO_CARD,
  SELECTED_HERO_DETAILS
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
  cardToFlip: "",
  selectedHeroDetails: null
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

export const setHeroID = (state = heroIdInitialState, action = {}) => {
  switch (action.type) {
    case SET_CURRENT_HERO:
      return { ...state, cardToFlip: action.payload };

    default:
      return state;
  }
};

export const setOnClick = (state = clickInitialState, action = {}) => {
  switch (action.type) {
    case SELECTED_HERO_DETAILS:
      return {
        ...state,
        selectedHeroDetails: action.payload
      };
    case SET_CURRENT_HERO:
      return {
        ...state,
        flipped: true,
        cardToFlip: action.payload
      };

    case CLOSE_HERO_CARD:
      return { ...state, flipped: false, cardToFlip: null };

    default:
      return state;
  }
};

export const selectedHero = (state = {}, action = {}) => {
  switch (action.type) {
    case SELECTED_HERO_DETAILS:
      return {
        ...state,
        details: action.payload
      };
    default:
      return state;
  }
};
