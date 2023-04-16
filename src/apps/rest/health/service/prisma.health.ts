import { Injectable } from '@nestjs/common'
import {
  HealthCheckError,
  HealthIndicator,
  HealthIndicatorResult
} from '@nestjs/terminus'
import { PrismaClient } from '@prisma/client'
@Injectable()
export class PrismaHealthIndicator extends HealthIndicator {
  readonly prisma: PrismaClient
  constructor() {
    super()
    this.prisma = new PrismaClient()
  }

  async isHealthy(key: string): Promise<HealthIndicatorResult> {
    console.log('URL: ', process.env.DATABASE_URL)
    try {
      await this.prisma.user.count()
      return this.getStatus(key, true)
    } catch (e) {
      console.log('Prisma check failed', e)
      throw new HealthCheckError('Prisma check failed', e)
    }
  }
}
