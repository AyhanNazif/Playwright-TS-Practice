export interface Product {
  id: number;
  name: string;
  sku: string;
  category: string;
  price: number;
  currency: string;
  stock: number;
  rating: number;
  status: 'active' | 'inactive' | string; // Strict literal or string fallback
  createdAt: string; // ISO 8601 Date string
}

export interface GetAllProductsResponse {
    data: Product[]
}

export interface GetProductResponse {
    data: Product
}