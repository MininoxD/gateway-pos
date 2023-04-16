import { HttpException } from '@nestjs/common'
export class CardExpired extends HttpException {
  constructor() {
    super('Card expired', 400)
  }
}
