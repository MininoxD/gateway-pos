import { HttpException } from '@nestjs/common'
export class CardCvvInvalid extends HttpException {
  constructor() {
    super('Card cvv is invalid', 400)
  }
}
