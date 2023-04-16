import { Nullable } from '../../../shared/domain/Nullable'
import { Card } from './Card'
import { CardId } from './CardId'

export abstract class CardRepository {
  abstract save(card: Card, token: string): Promise<CardId>
  abstract find(id: string): Promise<Nullable<Card>>
}
