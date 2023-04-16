import { Card } from '../domain/Card'
import { CardCvv } from '../domain/CardCvv'
import { CardExpirationMonth } from '../domain/CardExpirationMonth'
import { CardExpirationYear } from '../domain/CardExpirationYear'
import { CardId } from '../domain/CardId'
import { CardNumber } from '../domain/CardNumber'
import { CardRepository } from '../domain/CardRepository'
import { CardTimeExpiration } from '../domain/CardTimeExpiration'
import { Email } from '../domain/Email'
import { CardCreatorParameters } from './CardCreatorParameters'

export class CardCreator {
  constructor(private cardRepository: CardRepository) {}

  async run(data: CardCreatorParameters): Promise<CardId> {
    const id = CardId.random()

    const expirationDate = new Date()
    expirationDate.setMinutes(expirationDate.getMinutes() + 1)
    const cardTimeExpiration = CardTimeExpiration.create(expirationDate)
    const cardNumber = new CardNumber(data.cardNumber)
    const cardCvv = new CardCvv(data.cardCvv)
    const cardExpirationYear = new CardExpirationYear(data.cardExpirationYear)
    const cardExpirationMonth = new CardExpirationMonth(
      data.cardExpirationMonth
    )
    const email = new Email(data.email)
    const card = Card.create(
      id,
      cardTimeExpiration,
      cardNumber,
      cardCvv,
      cardExpirationYear,
      cardExpirationMonth,
      email
    )
    await this.cardRepository.save(card, data.token)
    return id
  }
}
