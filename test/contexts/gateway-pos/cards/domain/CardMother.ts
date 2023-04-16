import { CardCreatorParameters } from '../../../../../src/contexts/gateway-pos/cards/application/CardCreatorParameters'
import { Card } from '../../../../../src/contexts/gateway-pos/cards/domain/Card'
import { CardCvv } from '../../../../../src/contexts/gateway-pos/cards/domain/CardCvv'
import { CardExpirationMonth } from '../../../../../src/contexts/gateway-pos/cards/domain/CardExpirationMonth'
import { CardExpirationYear } from '../../../../../src/contexts/gateway-pos/cards/domain/CardExpirationYear'
import { CardId } from '../../../../../src/contexts/gateway-pos/cards/domain/CardId'
import { CardNumber } from '../../../../../src/contexts/gateway-pos/cards/domain/CardNumber'
import { CardTimeExpiration } from '../../../../../src/contexts/gateway-pos/cards/domain/CardTimeExpiration'
import { Email } from '../../../../../src/contexts/gateway-pos/cards/domain/Email'
import { CardCvvMother } from './CardCvvMother'
import { CardExpirationMonthMother } from './CardExpirationMonthMother'
import { CardExpirationYearMother } from './CardExpirationYearMother'
import { CardIdMother } from './CardIdMother'
import { CardNumberMother } from './CardNumberMother'
import { CardTimeExpirationMother } from './CardTimeExpirationMother'
import { EmailMother } from './EmailMother'

export class CardMother {
  static create(
    id: CardId,
    cardTimeExpiration: CardTimeExpiration,
    cardNumber: CardNumber,
    cardCvv: CardCvv,
    cardExpirationYear: CardExpirationYear,
    cardExpirationMonth: CardExpirationMonth,
    email: Email
  ): Card {
    return new Card(
      id,
      cardTimeExpiration,
      cardNumber,
      cardCvv,
      cardExpirationYear,
      cardExpirationMonth,
      email
    )
  }

  static random(): Card {
    return this.create(
      CardIdMother.random(),
      CardTimeExpirationMother.random(),
      CardNumberMother.random(),
      CardCvvMother.random(),
      CardExpirationYearMother.random(),
      CardExpirationMonthMother.random(),
      EmailMother.random()
    )
  }

  static fromRequest(request: CardCreatorParameters): Card {
    return this.create(
      CardIdMother.random(),
      CardTimeExpirationMother.createExpired(),
      CardNumberMother.create(request.cardNumber),
      CardCvvMother.create(request.cardCvv),
      CardExpirationYearMother.create(request.cardExpirationYear),
      CardExpirationMonthMother.create(request.cardExpirationMonth),
      EmailMother.create(request.email)
    )
  }
}
