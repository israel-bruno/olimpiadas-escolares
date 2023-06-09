import { Module } from '@nestjs/common'
import { databaseProviders } from 'src/providers/DatabaseProvider'

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
