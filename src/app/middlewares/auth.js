import jwt from "jsonwebtoken";
import authConfig from "../../config/auth.js";

const authMiddleware = (req, res, next) => {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).json({ erro: "token not provided" });
  }

  const token = authToken.slipt(" ")[1];

  try {
    jwt.verify(token, authConfig.secret, (error, decoded) => {
      if (error) {
        throw Error();
      }

      req.userId = decoded.id;
      re.userName = decoded.name;
      req.userIsAdmin = decoded.admin;
    });
  } catch (_error) {
    return res.status(401).json({ erro: "token is invalid" });
  }
  return next();
};

export default authMiddleware;
