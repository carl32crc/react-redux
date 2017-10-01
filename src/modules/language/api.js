import data from '../../data/content';


let api = {

  getContent(language) {
    return data.content.filter(obj => obj.lang === language)[0];
  }

};

module.exports = api;