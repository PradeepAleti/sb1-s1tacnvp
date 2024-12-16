import { DatabaseAdapter } from '../../../types/database';
import { Sale } from '../../../types';

export class SalesService {
  private db: DatabaseAdapter;

  constructor(db: DatabaseAdapter) {
    this.db = db;
  }

  async createSale(sale: Omit<Sale, 'id'>): Promise<Sale> {
    return this.db.query<Sale>(
      'INSERT INTO sales (date, customer, total, status) VALUES (?, ?, ?, ?) RETURNING *',
      [sale.date, sale.customer, sale.total, sale.status]
    );
  }

  async getSales(): Promise<Sale[]> {
    return this.db.query<Sale[]>('SELECT * FROM sales ORDER BY date DESC');
  }

  async updateSaleStatus(saleId: string, status: Sale['status']): Promise<void> {
    await this.db.query(
      'UPDATE sales SET status = ? WHERE id = ?',
      [status, saleId]
    );
  }
}