import { HttpException } from '@nestjs/common'
export class CardExpirationMonthInvalid extends HttpException {
  constructor() {
    super('Card expiration month is invalid', 400)
  }
}
