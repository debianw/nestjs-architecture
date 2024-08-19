import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateOrder {
  constructor() {}

  async execute(createOrderDto: any) {
    console.log('create order: ', createOrderDto);
  }
}
