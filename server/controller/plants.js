const API_KEY = require('../config/token.js')

const getPlantByType = (type) => {
  const typeUrl = `https://trefle.io/api/v1/plants/search?token=${API_KEY}&q=${type}`;
  return typeUrl;
};

module.exports = getPlantByType;
