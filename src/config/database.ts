import { DatabaseConfig } from '../types/database';

export const databaseConfig: DatabaseConfig = {
  type: process.env.DB_TYPE || 'postgres', // Can be 'postgres', 'mysql', 'mongodb'
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USER || 'admin',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'erp_db'
};