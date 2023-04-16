import { CardExpired } from '../domain/CardExpired'
import { CardNotFound } from '../domain/CardNotFound'
import { CardRepository } from '../domain/CardRepository'

export class CardFind {
  constructor(private repository: CardRepository) {}

  async run(id: string) {
    const card = await this.repository.find(id)
    if (!card) throw new CardNotFound()
    if (card.expired()) throw new CardExpired()
    const data = card.toPrimitives()
    return {
      cardNumber: data.cardNumber,
      cardExpirationYear: data.cardExpirationYear,
      cardExpirationMonth: data.cardExpirationMonth,
      email: data.email
    }
  }
}
