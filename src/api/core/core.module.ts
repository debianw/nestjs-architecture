import { Module } from '@nestjs/common';
import { CoreController } from './presenters/http/core.controller';

@Module({
  controllers: [CoreController],
})
export class CoreModule {}
