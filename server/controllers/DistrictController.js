import connection from '../config/db.js';


// Create Districts of States
export const createDistricts = async(req,res)=>{
    const {Name,State_Id}  = req.body
    try {
         const response = await connection.query(
            'INSERT INTO districts (Name,State_Id) VALUES (?,?)',
            [Name,State_Id]
        );
         res.status(200).json({message: `District created successfully`,response});
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to create district' });
    }
}

// Read All Districts 

export const getAllDistricts = async(req,res)=>{
    try {
        const [rows] = await connection.query('SELECT * FROM districts');
        res.status(200).json(rows);
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to get District' });
      }
}


// Read Districts 

export const getDistricts = async(req,res)=>{
    const { id } = req.params;
  try {
    const [rows] = await connection.query('SELECT * FROM districts WHERE id = ?', [id]);
    if (rows.length > 0) {
      res.status(200).json(rows[0]);
    } else {
      res.status(404).json({ message: 'District not found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to fetch District' });
  }
}

// Update Districts 
 
export const updateDistricts = async(req,res)=>{
    const { id } = req.params;
    const {Name, State_Id } = req.body;
    try {
      const response = await connection.query(
        'UPDATE districts SET Name = ?, State_Id = ? WHERE id = ?',
            [Name, State_Id, id]
      );
      res.status(200).json({ message: 'District updated successfully', response });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to update District' });
    }
}

// Delete Districts 

export const deleteDistricts = async(req,res)=>{
    const { id } = req.params;
    try {
        const [response] = await connection.query('DELETE FROM districts WHERE id = ?', [id]);
        if (response.affectedRows > 0) {
            res.status(200).json({ message: 'District deleted successfully' });
        } else {
            res.status(404).json({ error: 'District not found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to delete district' });
    }
}