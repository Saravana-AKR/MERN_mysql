import connection from '../config/db.js';


// Create Company Unit

export const createCompanyUnit = async(req,res)=>{
    const {CmpId,UnitName, Dno_Street, Nagar, Village, Taluk, District, State, Pin_code, Delflag}  = req.body
    try {
         const response = await connection.query(
            'INSERT INTO companyunit (CmpId,UnitName, Dno_Street, Nagar, Village, Taluk, District, State, Pin_code, Delflag) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?,?)',
            [CmpId,UnitName, Dno_Street, Nagar, Village, Taluk, District, State, Pin_code, Delflag]
        );
         res.status(200).json({message: `companyUnit created successfully`,response});
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to create companyUnit' });
    }
}


// Read All Company Unit Information

export const getAllCompanyUnit = async(req,res)=>{
    try {
        const [rows] = await connection.query('SELECT * FROM companyunit');
        res.status(200).json(rows);
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to create companyUnit' });
      }
}


// Read Company Unit Information

export const getCompanyUnit = async(req,res)=>{
    const { id } = req.params;
  try {
    const [rows] = await connection.query('SELECT * FROM companyunit WHERE id = ?', [id]);
    if (rows.length > 0) {
      res.status(200).json(rows[0]);
    } else {
      res.status(404).json({ message: 'companyUnit not found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to fetch companyUnit' });
  }
}

// Update Company Unit Information
 
export const updateCompanyUnit = async(req,res)=>{
    const { id } = req.params;
    const {CmpId, UnitName, Dno_Street, Nagar, Village, Taluk, District, State, Pin_code, Delflag } = req.body;
    try {
      const response = await connection.query(
        'UPDATE companyunit SET CmpId = ?, UnitName = ?, Dno_Street = ?, Nagar = ?, Village = ?, Taluk = ?, District = ?, State = ?, Pin_code = ?, Delflag = ? WHERE id = ?',
        [CmpId,UnitName, Dno_Street, Nagar, Village, Taluk, District, State, Pin_code, Delflag, id]
      );
      res.status(200).json({ message: 'companyunit updated successfully', response });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to update companyunit' });
    }
}

// Delete Company Unit  Information

export const deleteCompanyUnit = async(req,res)=>{
    const { id } = req.params;
  try {
    const response = await connection.query(
      'DELETE FROM companyunit WHERE id = ?',
      [id]
    );
    res.status(200).json({ message: 'companyunit deleted successfully', response });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to delete companyunit' });
  }
}