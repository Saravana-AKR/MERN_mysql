import connection from '../config/db.js';
import { nanoid } from 'nanoid';


// let employees = [
//     {id: nanoid(), name: 'John', age:26, email:'john@gmail.com'},
//     {id: nanoid(), name: 'morris', age:28, email:'morris@gmail.com'},
//     {id: nanoid(), name: 'Annie', age:20, email:'annie@gmail.com'},
//     {id: nanoid(), name: 'Peter', age:30, email:'peter@gmail.com'},
//     {id: nanoid(), name: 'James', age:29, email:'jamesh@gmail.com'},
// ];



// export const getAllEmployees = async(req,res)=>{  
//     res.status(200).json({message:' Data received', employees});
// };

// export const createEmployee = async(req,res)=>{
//     const {name,age,email} = req.body;
//     if (!name || !age || !email) {
//         return res.status(400).json({message:'please provide the field given'});
//     }

//     const id = nanoid(10);
//     const employee = {id,name,age,email};
//     employees.push(employee);
//     res.status(200).json({employee});
// }

// export const getEmployee = async(req,res)=>{
//     const {id} = req.params;
//     const employee = employees.find((employee)=>employee.id === id);
//     if (!employee) {
//       return res.status(404).json({message:`no employee id found  ${id}`});
//     }
//     res.status(200).json({employee});
// }

// export const updateEmployee = async(req,res)=>{
//     const {name,age,email} = req.body;
//      if (!name || !age || !email) {
//           return res.status(404).json({message:`please provide the field`});
//      }
      
//      const {id} = req.params;
//       const employee = employees.find((employee)=>employee.id === id);
//       if (!employee) {
//           return res.status(404).json({message:`no employee id found  ${id}`});
//       }
//       employee.name = name;
//       employee.age = age;
//       employee.email = email;
//       res.status(200).json({employee});   
//   }

// export const deleteEmployee =  async(req,res)=>{
//     const {id} = req.params;
//     const employee = employees.find((employee)=>employee.id === id);
//     if (!employee) {
//       return res.status(404).json({message:`no employee id found  ${id}`});
//     }
//     employees = employees.filter((employee)=>employee.id!== id);
//     res.status(200).json({message:`employee id ${id} deleted`});
// }

// Create Registration
export const createRegistration = async(req,res)=>{
    const {userName,email,password}  = req.body
    try {
         const response = await connection.query(
            'INSERT INTO empregistration (userName,email,password) VALUES (?,?,?)',
            [userName,email,password]
        );
         res.status(200).json({message: `User registered successfully`,response});
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to register user' });
    }
}


// Read All User Information
export const getAllRegistration = async(req,res)=>{
    try {
        const [rows] = await connection.query('SELECT * FROM empregistration');
        res.status(200).json(rows);
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to fetch users' });
      }
}

// Read User Information
export const getUserRegistration = async(req,res)=>{
    const { id } = req.params;
  try {
    const [rows] = await connection.query('SELECT * FROM empregistration WHERE id = ?', [id]);
    if (rows.length > 0) {
      res.status(200).json(rows[0]);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to fetch user' });
  }
}


// Update User Information
export const updateRegistration = async(req,res)=>{
    const { id } = req.params;
    const { userName, email, password } = req.body;
    try {
      const response = await connection.query(
        'UPDATE empregistration SET userName = ?, email = ?, password = ? WHERE id = ?',
        [userName, email, password, id]
      );
      res.status(200).json({ message: 'User updated successfully', response });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to update user' });
    }
}

// Delete User
export const deleteRegistration = async(req,res)=>{
    const { id } = req.params;
  try {
    const response = await connection.query(
      'DELETE FROM empregistration WHERE id = ?',
      [id]
    );
    res.status(200).json({ message: 'User deleted successfully', response });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to delete user' });
  }
}