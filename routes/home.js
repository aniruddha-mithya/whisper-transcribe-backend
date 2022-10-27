const home = {
  route: "/",
  method: "get",
  callbacks: [
    (req, res, next) => {
      res.sendFile("index.html", { root: "public" });
    },
  ],
};

module.exports = {
  home,
};
