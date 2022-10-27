const { home } = require("./home");
const { transcribe } = require("./transcribe");

module.exports = {
  routes: [home, transcribe],
};
