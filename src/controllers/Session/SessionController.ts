import { Body, Controller, HttpStatus, Post } from '@nestjs/common'
import { JoiPipe } from 'nestjs-joi'
import { LoginValidationDTO } from 'src/dtos/validation/LoginValidationDTO'
import { ResponseDTO } from 'src/dtos/ResponseDTO'

@Controller()
export class SessionController {
  @Post('/login')
  async login(@Body(JoiPipe) loginDTO: LoginValidationDTO): Promise<ResponseDTO> {
    if (!loginDTO.password) return new ResponseDTO(HttpStatus.BAD_REQUEST, 'Password is required')
    return new ResponseDTO(HttpStatus.OK, 'Login successfully')
  }
}
