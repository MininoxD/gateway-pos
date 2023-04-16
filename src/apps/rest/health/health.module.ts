import { Module } from '@nestjs/common'
import { TerminusModule } from '@nestjs/terminus'
import { HealthController } from './controllers/HealthController'
import { HttpModule } from '@nestjs/axios'
import { PrismaHealthIndicator } from './service/prisma.health'
@Module({
  imports: [TerminusModule, HttpModule],
  controllers: [HealthController],
  providers: [PrismaHealthIndicator]
})
export class HealthModule {}
