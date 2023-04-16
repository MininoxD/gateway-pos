import { StringValueObject } from '../../../shared/domain/value-object/stringValueObject'
import { EmailInvalid } from './EmailInvalid'
export class Email extends StringValueObject {
  constructor(value: string) {
    super(value)
    this.validateEmail(value)
  }

  validateEmail(value: string) {
    if (value.length > 100 || value.length < 5) throw new EmailInvalid()
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    const includeDomain = ['gmail.com', 'hotmail.com', 'yahoo.es']
    if (!regex.test(value)) throw new EmailInvalid()
    const math = value.match(/@(.+)/)
    const domain = math ? math[1] : ''
    if (!includeDomain.includes(domain)) throw new EmailInvalid()
  }
}
