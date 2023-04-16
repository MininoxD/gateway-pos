import { CardCreator } from '../../../../../src/contexts/gateway-pos/cards/application/CardCreator'
import { CardRepositoryMock } from '../__mock__/CardRepositoryMock'
import { CardMother } from '../domain/CardMother'
import { CardCreatorParametersMother } from './CardCreatorParametersMother'

describe('CardCreator', () => {
  let cardRepository: CardRepositoryMock
  let cardCreator: CardCreator

  beforeEach(() => {
    cardRepository = new CardRepositoryMock()
    cardCreator = new CardCreator(cardRepository)
  })

  it('should create a card valid', async () => {
    const reaquest = CardCreatorParametersMother.random()
    await cardCreator.run(reaquest)
    cardRepository.assertSaveHaveBeenCalled()
  })
})
