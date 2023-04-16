import { HttpException } from '@nestjs/common'
export class EmailInvalid extends HttpException {
  constructor() {
    super('Email is invalid', 400)
  }
}
