module.exports = (req, res, next) => {
  if (!req.user.isAdmin) return res.status(403).send("access denied.");
  next();
  //401 Unauthorized - we use unauthorized when user try to access protected resuource but they don't supply a valid jwt.
  // so we give them a change retry and send valid jwt.
  //403 Forbidden - if they send valid jwt but still not able to access the resource then we return forbidden that mean
  // don't try again you can not access it
};
