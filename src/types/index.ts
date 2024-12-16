export interface Product {
  id: string;
  name: string;
  sku: string;
  quantity: number;
  price: number;
  category: string;
}

export interface Sale {
  id: string;
  date: string;
  customer: string;
  products: Array<{
    productId: string;
    quantity: number;
    price: number;
  }>;
  total: number;
  status: 'pending' | 'completed' | 'cancelled';
}

export interface Employee {
  id: string;
  name: string;
  position: string;
  department: string;
  email: string;
  joinDate: string;
}