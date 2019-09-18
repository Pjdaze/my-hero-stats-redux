import { CHANGE_SEARCH_FIELD } from "./constants";

const initialState = {
  searchField: ""
};

//////Here i use default params in case state or action is empty
export const searchHeroes = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };

    default:
      return state;
  }
};
