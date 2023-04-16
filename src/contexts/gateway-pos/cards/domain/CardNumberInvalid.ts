import { HttpException } from '@nestjs/common'
export class CardNumberInvalid extends HttpException {
  constructor() {
    super('Card number is invalid', 400)
  }
}
