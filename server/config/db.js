import mysql from 'mysql2/promise';
import * as dotenv from 'dotenv';

dotenv.config();

async function connectToDatabase() {
    let connection;
    try {
        connection = await mysql.createConnection({ 
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });
        
        // Test the connection
        await connection.ping();
        console.log("Connected to the database successfully!");

    } catch (error) {
        console.error("Unable to connect to the database:", error.message);
    }
    
    return connection;
}

const connection = await connectToDatabase();



export default connection;