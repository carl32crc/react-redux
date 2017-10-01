import action_types from './action-types';
import api from './api';
import browserLang from './browserLang';

const initialState = {
  content: api.getContent(browserLang()) // Loads default language content (en) as an initial state
};

let reducer = function (state = initialState, action) {
  switch (action.type) {
    case action_types.SWITCH_LANGUAGE:
      return {
        content: api.getContent(action.language)
      };
    default:
      return state;
  }
};

module.exports = reducer;