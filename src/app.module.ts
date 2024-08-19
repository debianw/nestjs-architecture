import { CoreModule } from '@api/core/core.module';
import { OrderModule } from '@api/order/order.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [CoreModule, OrderModule],
})
export class AppModule {}
