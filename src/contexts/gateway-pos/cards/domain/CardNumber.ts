import { NumberValueObject } from '../../../shared/domain/value-object/numberValueObject'
import { CardNumberInvalid } from './CardNumberInvalid'

export class CardNumber extends NumberValueObject {
  constructor(value: number) {
    super(value)
    this.validateCardNumber(value)
  }

  validateCardNumber(value: number) {
    const digits = value.toString().split('').reverse()
    if (digits.length < 13 || digits.length > 16) throw new CardNumberInvalid()

    const sum = digits.reduce((acc, digit, index) => {
      const num = parseInt(digit, 10)
      const numDuplicated = num * (index % 2 !== 0 ? 2 : 1)
      const numFinal = numDuplicated > 9 ? numDuplicated - 9 : numDuplicated
      return acc + numFinal
    }, 0)
    if (sum % 10 !== 0) throw new CardNumberInvalid()
  }
}
