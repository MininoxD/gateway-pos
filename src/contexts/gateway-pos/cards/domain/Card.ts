import { CardCvv } from './CardCvv'
import { CardExpirationMonth } from './CardExpirationMonth'
import { CardExpirationYear } from './CardExpirationYear'
import { CardId } from './CardId'
import { CardNumber } from './CardNumber'
import { CardTimeExpiration } from './CardTimeExpiration'
import { Email } from './Email'

export class Card {
  public readonly id: CardId
  private readonly cardTimeExpiration: CardTimeExpiration
  private readonly cardNumber: CardNumber
  private readonly cardCvv: CardCvv
  private readonly cardExpirationYear: CardExpirationYear
  private readonly cardExpirationMonth: CardExpirationMonth
  private readonly email: Email

  constructor(
    id: CardId,
    cardTimeExpiration: CardTimeExpiration,
    cardNumber: CardNumber,
    cardCvv: CardCvv,
    cardExpirationYear: CardExpirationYear,
    cardExpirationMonth: CardExpirationMonth,
    email: Email
  ) {
    this.id = id
    this.cardTimeExpiration = cardTimeExpiration
    this.cardNumber = cardNumber
    this.cardCvv = cardCvv
    this.cardExpirationYear = cardExpirationYear
    this.cardExpirationMonth = cardExpirationMonth
    this.email = email
  }

  static create(
    id: CardId,
    cardTimeExpiration: CardTimeExpiration,
    cardNumber: CardNumber,
    cardCvv: CardCvv,
    cardExpirationYear: CardExpirationYear,
    cardExpirationMonth: CardExpirationMonth,
    email: Email
  ) {
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

  toPrimitives() {
    return {
      id: this.id.value,
      cardTimeExpiration: this.cardTimeExpiration.value,
      cardNumber: this.cardNumber.value,
      cardCvv: this.cardCvv.value,
      cardExpirationYear: this.cardExpirationYear.value,
      cardExpirationMonth: this.cardExpirationMonth.value,
      email: this.email.value
    }
  }

  static fromPrimitives(primitives: {
    id: string
    cardTimeExpiration: Date
    cardNumber: number
    cardCvv: number
    cardExpirationYear: string
    cardExpirationMonth: string
    email: string
  }) {
    return new Card(
      new CardId(primitives.id),
      new CardTimeExpiration(primitives.cardTimeExpiration),
      new CardNumber(primitives.cardNumber),
      new CardCvv(primitives.cardCvv),
      new CardExpirationYear(primitives.cardExpirationYear),
      new CardExpirationMonth(primitives.cardExpirationMonth),
      new Email(primitives.email)
    )
  }

  expired(): boolean {
    const now = new Date()
    return this.cardTimeExpiration.value < now
  }
}
