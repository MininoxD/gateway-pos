import { HttpException } from '@nestjs/common'
export class CardNotFound extends HttpException {
  constructor() {
    super('CardNotFound', 404)
  }
}
