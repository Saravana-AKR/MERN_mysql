
import { verifyJWT } from '../utils/tokenUtils.js';



export const authenticateUser = async (req, res, next) => {
    const { token } = req.cookies;
  if (!token) {
    throw new Error('authentication invalid');
  }
    
  try {
    const { userId, role } = verifyJWT(token);
    req.user = { userId, role };
    next();
  } catch (error) {
    throw new Error('authentication invalid');
  }
  };