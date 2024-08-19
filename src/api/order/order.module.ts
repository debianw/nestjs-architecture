import { Module } from '@nestjs/common';
import { OrderController } from './presenters/http/order.controller';
import { CreateOrder } from './application/use-case/order.create';

@Module({
  controllers: [OrderController],
  providers: [CreateOrder],
})
export class OrderModule {}
