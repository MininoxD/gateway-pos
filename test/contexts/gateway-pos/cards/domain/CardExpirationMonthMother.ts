import { CardExpirationMonth } from '../../../../../src/contexts/gateway-pos/cards/domain/CardExpirationMonth'
import { MotherCreator } from '../../../shared/domain/motherCreator'

export class CardExpirationMonthMother {
  static create(value: string): CardExpirationMonth {
    return new CardExpirationMonth(value)
  }

  static random(): CardExpirationMonth {
    return this.create(
      MotherCreator.random().datatype.number({ min: 1, max: 12 }).toString()
    )
  }
}
