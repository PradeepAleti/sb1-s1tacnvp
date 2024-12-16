import { DatabaseAdapter } from '../../../types/database';
import { Employee } from '../../../types';

export class EmployeeService {
  private db: DatabaseAdapter;

  constructor(db: DatabaseAdapter) {
    this.db = db;
  }

  async getEmployees(): Promise<Employee[]> {
    return this.db.query<Employee[]>('SELECT * FROM employees');
  }

  async addEmployee(employee: Omit<Employee, 'id'>): Promise<Employee> {
    return this.db.query<Employee>(
      'INSERT INTO employees (name, position, department, email, join_date) VALUES (?, ?, ?, ?, ?) RETURNING *',
      [employee.name, employee.position, employee.department, employee.email, employee.joinDate]
    );
  }

  async updateEmployee(id: string, employee: Partial<Employee>): Promise<void> {
    const updates = Object.entries(employee)
      .map(([key, value]) => `${key} = ?`)
      .join(', ');
    
    await this.db.query(
      `UPDATE employees SET ${updates} WHERE id = ?`,
      [...Object.values(employee), id]
    );
  }
}