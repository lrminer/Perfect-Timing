const path = require('path');

module.exports = app => {
  app.get("/", (req, res) => {
      res.send(path.join(__dirname, './client/src/public/index.html'))
  });
};
