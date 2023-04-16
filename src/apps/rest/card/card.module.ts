import { Module, Provider } from '@nestjs/common'
import { CardCreator } from '../../../contexts/gateway-pos/cards/application/CardCreator'
import { CardRepository } from '../../../contexts/gateway-pos/cards/domain/CardRepository'
import { CardRepositoryMongodb } from '../../../contexts/gateway-pos/cards/infrastructure/CardRepositoryMongodb'
import { CardPostController } from './controller/cardPost.controller'
import { CardGetController } from './controller/cardGet.controller'
import { CardFind } from '../../../contexts/gateway-pos/cards/application/CardFind'

const CardCreatorProvider: Provider = {
  provide: CardCreator,
  useFactory: (cardRepository: CardRepository) =>
    new CardCreator(cardRepository),
  inject: [CardRepository]
}

const CardFindProvider: Provider = {
  provide: CardFind,
  useFactory: (cardRepository: CardRepository) => new CardFind(cardRepository),
  inject: [CardRepository]
}
@Module({
  controllers: [CardPostController, CardGetController],
  providers: [
    {
      provide: CardRepository,
      useClass: CardRepositoryMongodb
    },
    CardCreatorProvider,
    CardFindProvider
  ]
})
export class CardModule {}
