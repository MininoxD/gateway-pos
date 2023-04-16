import { Email } from '../../../../../src/contexts/gateway-pos/cards/domain/Email'
import { MotherCreator } from '../../../shared/domain/motherCreator'

export class EmailMother {
  static create(value: string): Email {
    return new Email(value)
  }

  static random(): Email {
    const includeDomain = ['gmail.com', 'hotmail.com', 'yahoo.es']
    const domain =
      includeDomain[Math.floor(Math.random() * includeDomain.length)]
    return this.create(
      MotherCreator.random().internet.email(undefined, undefined, domain)
    )
  }
}
