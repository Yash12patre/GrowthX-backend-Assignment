import jwt from "jsonwebtoken";
import USER from "../model/USER.js"; // Ensure the path is correct and ends with .js

// Middleware to verify JWT token
export const verifyToken = async (req, resp, next) => {
  try {
    const token = req.cookies.jwtToken;
    if (!token) {
      return resp.status(401).json({ error: "Unauthorized user" });
    }
    const decoded = jwt.verify(token, process.env.SECRET);
    if (!decoded) {
      return resp.status(401).json({ error: "Unauthorized user" });
    }
    const loggedUser  = await USER.findById(decoded._id);
    req.user = loggedUser ;
    next();
  } catch (error) {
    console.log(error);
    return resp.status(500).json({ error: "Internal server error" });
  }
};

// Middleware to check user role
export const checkRole = (req, resp, next) => {
  try {
    if (req.user.role !== "admin") {
      return resp.status(403).json({ error: "Forbidden: Only admins can access this" });
    }
    next();
  } catch (error) {
    console.log(error);
    return resp.status(500).json({ error: "Internal server error" });
  }
};