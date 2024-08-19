import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateOrder } from '@api/order/application/use-case/order.create';

@Controller('orders')
export class OrderController {
  constructor(private readonly createOrderService: CreateOrder) {}

  @Get()
  findAll() {
    return [];
  }

  @Post()
  async createOrder(@Body() createOrderDto: any) {
    await this.createOrderService.execute(createOrderDto);

    return {
      ...createOrderDto,
    };
  }
}
