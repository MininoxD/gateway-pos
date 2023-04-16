import { StringValueObject } from '../../../shared/domain/value-object/stringValueObject'
import { CardExpirationYearInvalid } from './CardExpirationYearInvalid'

export class CardExpirationYear extends StringValueObject {
  constructor(value: string) {
    super(value)
    this.validateCardExpirationYear(value)
  }

  validateCardExpirationYear(value: string) {
    const regex = /^\d{4}$/
    if (!regex.test(value)) throw new CardExpirationYearInvalid()
    const now = new Date()
    const maxAllowedYear = now.getFullYear() + 5
    if (Number(value) > maxAllowedYear && Number(value) >= now.getFullYear())
      throw new CardExpirationYearInvalid()
  }
}
