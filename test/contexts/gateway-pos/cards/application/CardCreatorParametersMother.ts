import { CardCreatorParameters } from '../../../../../src/contexts/gateway-pos/cards/application/CardCreatorParameters'
import { UuidMother } from '../../../shared/domain/uuidMother'
import { CardCvvMother } from '../domain/CardCvvMother'
import { CardExpirationMonthMother } from '../domain/CardExpirationMonthMother'
import { CardExpirationYearMother } from '../domain/CardExpirationYearMother'
import { CardNumberMother } from '../domain/CardNumberMother'
import { EmailMother } from '../domain/EmailMother'

export class CardCreatorParametersMother {
  static create(
    cardNumber: number,
    cardCvv: number,
    cardExpirationYear: string,
    cardExpirationMonth: string,
    email: string,
    token: string
  ): CardCreatorParameters {
    return {
      cardNumber,
      cardCvv,
      cardExpirationYear,
      cardExpirationMonth,
      email,
      token
    }
  }

  static random(): CardCreatorParameters {
    return this.create(
      CardNumberMother.random().value,
      CardCvvMother.random().value,
      CardExpirationYearMother.random().value,
      CardExpirationMonthMother.random().value,
      EmailMother.random().value,
      UuidMother.random()
    )
  }
}
