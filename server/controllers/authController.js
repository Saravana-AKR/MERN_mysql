import connection from '../config/db.js';


// Create Admin or User
export const register = async (req, res) => {
    const { name, email, password, role = 'user' } = req.body; // role default to 'user' if not provided
    try {
      const query = `
        INSERT INTO register (name, email, password, role) 
        VALUES (?, ?, ?, ?)
      `;
      const [response] = await connection.query(query, [name, email, password, role]);
      res.status(200).json({ message: 'User registered successfully', response });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to register user' });
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
        SELECT * FROM register WHERE email = ? AND password = ?
      `;
      const [rows] = await connection.query(query, [email, password]);
  
      if (rows.length > 0) {
        const user = rows[0];
        res.status(200).json({ message: 'Login successful', user });
      } else {
        res.status(401).json({ error: 'Invalid email or password' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to login user' });
    }
  };