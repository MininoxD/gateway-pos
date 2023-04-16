import { HttpException } from '@nestjs/common'
export class CardExpirationYearInvalid extends HttpException {
  constructor() {
    super('Card expiration year is invalid', 400)
  }
}
