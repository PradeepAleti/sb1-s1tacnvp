import { DatabaseAdapter, DatabaseConfig } from '../../types/database';

export abstract class BaseAdapter implements DatabaseAdapter {
  protected config: DatabaseConfig;

  constructor(config: DatabaseConfig) {
    this.config = config;
  }

  abstract connect(): Promise<void>;
  abstract disconnect(): Promise<void>;
  abstract query<T>(query: string, params?: any[]): Promise<T>;
}