import { equal } from 'assert'
import { CardCreator } from '../../../../../src/contexts/gateway-pos/cards/application/CardCreator'
import { CardFind } from '../../../../../src/contexts/gateway-pos/cards/application/CardFind'
import { CardRepositoryMock } from '../__mock__/CardRepositoryMock'
import { CardMother } from '../domain/CardMother'
import { CardCreatorParametersMother } from './CardCreatorParametersMother'

describe('Card Finder', () => {
  let cardRepository: CardRepositoryMock
  let cardFind: CardFind

  beforeEach(() => {
    cardRepository = new CardRepositoryMock()
    cardFind = new CardFind(cardRepository)
  })

  it('should create a card valid', async () => {
    const card = CardMother.random()
    cardRepository.returnOnFind(card)
    await cardFind.run(card.id.value)
    cardRepository.assertFindHaveBeenCalled(card.id.value)
  })
})
