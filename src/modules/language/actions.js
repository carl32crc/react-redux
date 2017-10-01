import action_types from './action-types';

let actions = {
  switchLanguage(language) {
    return {
      type: action_types.SWITCH_LANGUAGE,
      language
    }
  }
};

module.exports = actions;