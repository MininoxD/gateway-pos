import { NumberValueObject } from '../../../shared/domain/value-object/numberValueObject'
import { CardCvvInvalid } from './CardCvvInvalid'

export class CardCvv extends NumberValueObject {
  constructor(value: number) {
    super(value)
    this.validateCardCvv(value)
  }

  validateCardCvv(value: number) {
    const digits = value.toString().split('')
    if (digits.length < 3 || digits.length > 4) throw new CardCvvInvalid()
  }
}
