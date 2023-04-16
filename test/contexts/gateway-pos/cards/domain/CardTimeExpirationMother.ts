import { CardTimeExpiration } from '../../../../../src/contexts/gateway-pos/cards/domain/CardTimeExpiration'
import { MotherCreator } from '../../../shared/domain/motherCreator'

export class CardTimeExpirationMother {
  static create(value: Date): CardTimeExpiration {
    return new CardTimeExpiration(value)
  }

  static random(): CardTimeExpiration {
    return this.create(MotherCreator.random().date.future())
  }

  static createExpired(): CardTimeExpiration {
    const expirationDate = new Date()
    expirationDate.setMinutes(expirationDate.getMinutes() + 1)
    return this.create(expirationDate)
  }
}
