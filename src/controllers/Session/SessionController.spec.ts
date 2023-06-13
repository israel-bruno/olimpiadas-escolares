import { Test, TestingModule } from '@nestjs/testing'
import { SessionController } from './SessionController'
import { DatabaseTestingModule } from 'src/test/DatabaseTestingModule'

describe('SessionController', () => {
  let sessionController: SessionController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [...DatabaseTestingModule()],
      controllers: [SessionController],
      providers: [],
    }).compile()

    sessionController = app.get<SessionController>(SessionController)
  })

  describe('Sessions Controller', () => {
    it('Deve ser possível fazer login', async () => {
      const loginDTO = { password: 'Joãozinho', username: 'asd' }
      const response = await sessionController.login(loginDTO)
      expect(response.message).toBe('Login successfully')
    })

    it('Não deve ser possível logar com uma senha inválida', async () => {
      const loginDTO = { username: 'Joãozinho', password: '' }
      const response = await sessionController.login(loginDTO)
      expect(response.status).toBe(400)
    })
  })
})
