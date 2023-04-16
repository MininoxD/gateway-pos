import { Nullable } from '../../../shared/domain/Nullable'
import { MongofdbRepository } from '../../../shared/infrastructure/persistance/mongodb/MongofdbRepository'
import { Card } from '../domain/Card'
import { CardId } from '../domain/CardId'
import { CardRepository } from '../domain/CardRepository'
import * as CryptoJS from 'crypto-js'
export class CardRepositoryMongodb
  extends MongofdbRepository
  implements CardRepository
{
  async save(card: Card, token: string): Promise<CardId> {
    const { id, cardTimeExpiration, ...rest } = card.toPrimitives()
    const ciphertext = CryptoJS.AES.encrypt(
      JSON.stringify(rest),
      '1234'
    ).toString()
    await this.prisma.cardData.create({
      data: {
        id,
        data: ciphertext,
        expirationDate: cardTimeExpiration,
        token
      }
    })
    return new CardId(id)
  }

  async find(id: string): Promise<Nullable<Card>> {
    const card = await this.prisma.cardData.findUnique({
      where: { id }
    })
    if (!card) return null
    const bytes = CryptoJS.AES.decrypt(card.data, '1234')
    const ori = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
    return Card.fromPrimitives({
      id: card.id,
      cardTimeExpiration: card.expirationDate,
      cardNumber: ori.cardNumber,
      cardCvv: ori.cardCvv,
      cardExpirationYear: ori.cardExpirationYear,
      cardExpirationMonth: ori.cardExpirationMonth,
      email: ori.email
    })
  }
}
