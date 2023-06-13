import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from 'src/entities/UserEntity'

export const DatabaseTestingModule = () => [
  TypeOrmModule.forRoot({
    type: 'better-sqlite3',
    database: ':memory:',
    dropSchema: true,
    entities: ['dist/entities/*{.ts,.js}'],
    synchronize: true,
  }),
  TypeOrmModule.forFeature([UserEntity]),
]
