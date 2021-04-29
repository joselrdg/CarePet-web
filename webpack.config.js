let path = require('path');

module.exports = {
    resolve: {
      modules: ['node_modules'],
      alias: {
        public: path.join(__dirname, './public')
      }
    },
  }