import { CardNumber } from '../../../../../src/contexts/gateway-pos/cards/domain/CardNumber'
import { MotherCreator } from '../../../shared/domain/motherCreator'

export class CardNumberMother {
  static create(value: number): CardNumber {
    return new CardNumber(value)
  }

  static random(): CardNumber {
    return this.create(Number('4929225088348035'))
  }
}
