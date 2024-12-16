import { DatabaseConfig } from '../../types/database';
import { PostgresAdapter } from './adapters/PostgresAdapter';
import { BaseAdapter } from './BaseAdapter';

export class DatabaseFactory {
  static createAdapter(config: DatabaseConfig): BaseAdapter {
    switch (config.type.toLowerCase()) {
      case 'postgres':
        return new PostgresAdapter(config);
      // Add more adapters as needed
      default:
        throw new Error(`Unsupported database type: ${config.type}`);
    }
  }
}