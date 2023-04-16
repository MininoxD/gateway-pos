import { CardCvv } from '../../../../../src/contexts/gateway-pos/cards/domain/CardCvv'
import { MotherCreator } from '../../../shared/domain/motherCreator'

export class CardCvvMother {
  static create(value: number): CardCvv {
    return new CardCvv(value)
  }

  static random(): CardCvv {
    return this.create(Number(MotherCreator.random().finance.creditCardCVV()))
  }
}
