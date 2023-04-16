import { CardExpirationYear } from '../../../../../src/contexts/gateway-pos/cards/domain/CardExpirationYear'
import { MotherCreator } from '../../../shared/domain/motherCreator'

export class CardExpirationYearMother {
  static create(value: string): CardExpirationYear {
    return new CardExpirationYear(value)
  }

  static random(): CardExpirationYear {
    const min = new Date().getFullYear()
    const max = min + 5
    return this.create(
      MotherCreator.random()
        .datatype.number({
          min,
          max
        })
        .toString()
    )
  }
}
