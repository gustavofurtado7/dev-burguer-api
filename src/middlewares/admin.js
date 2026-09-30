const adminMiddleware = (req, res, next) => {
  const IsUserAdmin = req.userIsAdmin;

  if (!IsUserAdmin) {
    return res.status(401).json();
  }

  return next();
};

export default adminMiddleware;
