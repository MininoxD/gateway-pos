import { DateValueObject } from '../../../shared/domain/value-object/dateValueObject'

export class CardTimeExpiration extends DateValueObject {
  static create(value: Date): CardTimeExpiration {
    return new CardTimeExpiration(value)
  }
}
