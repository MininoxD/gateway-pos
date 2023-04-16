import { Module } from '@nestjs/common'
import { HealthModule } from './health/health.module'
import { CardModule } from './card/card.module'
import { ConfigModule } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { jwtConstants } from './shared/constants'
@Module({
  imports: [
    ConfigModule.forRoot(),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' }
    }),
    HealthModule,
    CardModule
  ]
})
export class AppModule {}
