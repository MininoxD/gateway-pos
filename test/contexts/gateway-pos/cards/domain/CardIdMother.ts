import { CardId } from '../../../../../src/contexts/gateway-pos/cards/domain/CardId'
import { UuidMother } from '../../../shared/domain/uuidMother'

export class CardIdMother {
  static create(value: string): CardId {
    return new CardId(value)
  }

  static random(): CardId {
    return this.create(UuidMother.random())
  }
}
