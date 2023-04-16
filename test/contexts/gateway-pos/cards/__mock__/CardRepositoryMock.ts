import { Card } from '../../../../../src/contexts/gateway-pos/cards/domain/Card'
import { CardId } from '../../../../../src/contexts/gateway-pos/cards/domain/CardId'
import { CardRepository } from '../../../../../src/contexts/gateway-pos/cards/domain/CardRepository'
import { Nullable } from '../../../../../src/contexts/shared/domain/Nullable'

export class CardRepositoryMock implements CardRepository {
  saveMock: jest.Mock
  findMock: jest.Mock
  card: Nullable<Card>
  constructor() {
    this.saveMock = jest.fn()
    this.findMock = jest.fn()
    this.card = null
  }
  async save(card: Card, token: string): Promise<CardId> {
    this.saveMock(card, token)
    return card.id
  }
  async find(id: string): Promise<Nullable<Card>> {
    this.findMock(id)
    return this.card
  }

  assertSaveHaveBeenCalled(): void {
    expect(this.saveMock).toHaveBeenCalled()
  }

  assertFindHaveBeenCalled(id: string): void {
    expect(this.findMock).toHaveBeenCalledWith(id)
  }

  returnOnFind(card: Card): void {
    this.card = card
  }
}
