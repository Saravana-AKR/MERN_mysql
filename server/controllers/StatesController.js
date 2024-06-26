import connection from '../config/db.js';


// Create States of India
export const createStates = async(req,res)=>{
    const {Name}  = req.body
    try {
         const response = await connection.query(
            'INSERT INTO states (Name) VALUES (?)',
            [Name]
        );
         res.status(200).json({message: `States created successfully`,response});
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to create States' });
    }
}

// Read All Company Unit Information

export const getAllStates = async(req,res)=>{
    try {
        const [rows] = await connection.query('SELECT * FROM states');
        res.status(200).json(rows);
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to get States' });
      }
}


// Read Company Unit Information

export const getStates = async(req,res)=>{
    const { id } = req.params;
  try {
    const [rows] = await connection.query('SELECT * FROM States WHERE id = ?', [id]);
    if (rows.length > 0) {
      res.status(200).json(rows[0]);
    } else {
      res.status(404).json({ message: 'States not found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to fetch States' });
  }
}

// Update Company Unit Information
 
export const updateStates = async(req,res)=>{
    const { id } = req.params;
    const {Name} = req.body;
    try {
      const response = await connection.query(
        'UPDATE States SET Name = ?, WHERE id = ?',
        [Name]
      );
      res.status(200).json({ message: 'States updated successfully', response });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to update States' });
    }
}

// Delete Company Unit  Information

export const deleteStates = async(req,res)=>{
    const { id } = req.params;
  try {
    const response = await connection.query(
      'DELETE FROM States WHERE id = ?',
      [id]
    );
    res.status(200).json({ message: 'companyunit deleted successfully', response });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to delete companyunit' });
  }
}