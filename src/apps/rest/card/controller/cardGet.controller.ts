import { Controller, Get, Headers, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { CardFind } from '../../../../contexts/gateway-pos/cards/application/CardFind'
import { jwtConstants } from '../../shared/constants'
@Controller('card')
export class CardGetController {
  constructor(private cardFind: CardFind, private jwtService: JwtService) {}

  @Get('')
  async getCard(
    @Headers('authorization')
    authorization: string
  ) {
    let id: string
    try {
      if (!authorization) throw new UnauthorizedException()
      const token = authorization.split(' ')[1]
      const payload = await this.jwtService.verifyAsync(token, {
        secret: jwtConstants.secret
      })
      id = payload.id
    } catch (e) {
      throw new UnauthorizedException()
    }
    const data = await this.cardFind.run(id)
    return data
  }
}
