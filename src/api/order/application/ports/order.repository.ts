import { Order } from '@api/order/domain/order';

export abstract class OrderRepository {
  abstract findMany(): Promise<Order>[];
  abstract findById(id: string): Promise<Order>;
  abstract create(data: Order): Promise<Order>;
  abstract update(id: string, data: Partial<Order>): Promise<Order>;
}
