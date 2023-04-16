import { StringValueObject } from '../../../shared/domain/value-object/stringValueObject'
import { CardExpirationMonthInvalid } from './CardExpirationMonthInvalid'

export class CardExpirationMonth extends StringValueObject {
  constructor(value: string) {
    super(value)
    this.validateCardExpirationMonth(value)
  }

  validateCardExpirationMonth(value: string) {
    const regex = /^(0?[1-9]|1[0-2])$/
    if (!regex.test(value)) throw new CardExpirationMonthInvalid()
  }
}
