import { PrismaClient } from '@prisma/client'

export abstract class MongofdbRepository {
  readonly prisma: PrismaClient
  constructor() {
    this.prisma = new PrismaClient()
  }
}
