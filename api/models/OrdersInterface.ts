interface OrderItem {
  productId: number;
  quantity: number;
  unitPrice: number;
}

interface OrderData {
  id: number;
  orderNumber: string;
  customerId: number;
  status: string;
  items: OrderItem[];
  total: number;
  currency: string;
  createdAt: string;
}

export interface GetOrderResponse {
  data: OrderData;
}

export interface GetAllOrdersResponse {
  data: OrderData[];
}