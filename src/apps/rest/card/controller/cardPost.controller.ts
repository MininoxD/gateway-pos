import {
  Body,
  Controller,
  Post,
  Headers,
  BadRequestException
} from '@nestjs/common'
import { CardCreator } from '../../../../contexts/gateway-pos/cards/application/CardCreator'
import { CardCreatorParameters } from '../../../../contexts/gateway-pos/cards/application/CardCreatorParameters'
import { JwtService } from '@nestjs/jwt'
import { ZodValidationPipe } from '../../validator/zodValidationPipe'
import { CardCreatorParametersSchema } from '../schema/cardCreatorParametersSchema'
import { CardCreatorParametersSchemaType } from '../type/typeRequest'

@Controller('card')
export class CardPostController {
  constructor(
    private cardCreator: CardCreator,
    private jwtService: JwtService
  ) {}

  @Post('')
  async createCard(
    @Headers('authorization')
    authorization: string,
    @Body(new ZodValidationPipe(CardCreatorParametersSchema))
    body: CardCreatorParametersSchemaType
  ) {
    if (!authorization)
      throw new BadRequestException('Validation failed', {
        description: 'Token is required'
      })
    const token = authorization.split(' ')[1]
    const data = {
      ...body,
      token
    }
    const uuid = await this.cardCreator.run(data)
    return {
      access_token: await this.jwtService.signAsync(
        { id: uuid.value },
        {
          expiresIn: '60s'
        }
      )
    }
  }
}
