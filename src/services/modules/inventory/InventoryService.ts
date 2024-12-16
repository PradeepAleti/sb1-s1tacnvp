import { DatabaseAdapter } from '../../../types/database';
import { Product } from '../../../types';

export class InventoryService {
  private db: DatabaseAdapter;

  constructor(db: DatabaseAdapter) {
    this.db = db;
  }

  async getProducts(): Promise<Product[]> {
    return this.db.query<Product[]>('SELECT * FROM products');
  }

  async addProduct(product: Omit<Product, 'id'>): Promise<Product> {
    return this.db.query<Product>(
      'INSERT INTO products (name, sku, quantity, price, category) VALUES (?, ?, ?, ?, ?) RETURNING *',
      [product.name, product.sku, product.quantity, product.price, product.category]
    );
  }

  async updateStock(productId: string, quantity: number): Promise<void> {
    await this.db.query(
      'UPDATE products SET quantity = quantity + ? WHERE id = ?',
      [quantity, productId]
    );
  }
}