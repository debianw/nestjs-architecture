import { Controller, Get } from '@nestjs/common';

@Controller()
export class CoreController {
  constructor() {}

  @Get()
  health() {
    return 'api v2';
  }
}
