import { Entity, PrimaryColumn, Column, CreateDateColumn } from 'typeorm'

@Entity('users')
export class UserEntity {
  @PrimaryColumn()
  id: string

  @Column({ name: 'name' })
  name: string

  @Column({ name: 'email' })
  email: string

  @Column({ name: 'password' })
  password: string

  @Column({ name: 'validation_token' })
  validationToken: string

  @CreateDateColumn({ name: 'created_at', update: false })
  createdAt: Date

  @CreateDateColumn({ name: 'updated_at', update: true })
  updatedAt: Date
}
