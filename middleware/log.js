module.exports = (req, res, next) => {
    console.log("PATH = " + req.url + "\n" + "INTENTIONS = " + req.method + "\n" + "HOSTNAME = " + req.hostname);
    next();
  };