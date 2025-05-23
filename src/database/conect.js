import mysql from 'mysql2/promise';
import { variables } from '../../configs.js';

export const connectDB = async () => {
    try {
        const connection = await mysql.createConnection({
            host: variables.HOST,
            user: variables.USER,
            database: variables.DB,
            port: variables.PORT,
            
        });

        console.log('Conectado!');
        return connection;
    } catch (error) {
        console.log('Erro ao conectar:', error);
        throw error; 
    }
};
