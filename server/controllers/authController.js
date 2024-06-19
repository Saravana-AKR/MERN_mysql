import connection from '../config/db.js';
import { hashPassword,comparePassword } from '../utils/passwordUtils.js';
import { createJWT } from '../utils/tokenUtils.js';




        
        


// Create Admin or User
export const register = async (req, res) => {
    const { name, email, password, role  } = req.body; // role default to 'user' if not provided

     // Check if all required fields are provided
    if (!name || !email || !password || !role) {
        return  res.status(400).json({ error: 'Some Field has empty ...' });
      }

    try {
        const hashedPassword = await hashPassword(password);
        
      const query = `
        INSERT INTO register (name, email, password, role) 
        VALUES (?, ?, ?, ?)
      `;
      const [response] = await connection.query(query, [name, email, hashedPassword,  role]);
      
       // Assuming `response.insertId` is the ID of the newly created user
    const userId = response.insertId;
    
    // Create JWT token
    const token = createJWT({ userId, role });
    console.log(token);

    

      res.status(200).json({ message: 'User registered successfully', response });
    } catch (error) {
        console.log(error);
      res.status(400).json({ error: 'Email already exists ...' });
      
    }
  };




  // Get All Register
  export const getAllRegister = async(req,res)=>{
    try {
        const [rows] = await connection.query('SELECT * FROM register');
        res.status(200).json(rows);
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to fetch users' });
      }
}


  //  Login

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const query = `
        SELECT * FROM register WHERE email = ? 
      `;
      const [rows] = await connection.query(query, [email]);
  
      if (rows.length > 0) {
        const user = rows[0];
        const isPasswordValid = await comparePassword(password, user.password);
        
        if (isPasswordValid) {
          res.status(200).json({ message: 'Login successful', user });
        } else {
          res.status(401).json({ error: 'Invalid email or password' });
        }
      } else {
        res.status(401).json({ error: 'Invalid email or password' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to login user' });
    }
  };