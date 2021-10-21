import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService"

class AuthenticateUserController {
  // O code que nossa função execute() recebe como parâmetro, virá 
  // do body da requisição, então vamos desestruturar todos os dados
  // recebidos para podermos inseri-lo como parâmetro
  async handle(request: Request, response: Response) {
    const { code } = request.body

    const service = new AuthenticateUserService()
    try {
      const result = await service.execute(code)
      return response.json(result)
    } catch (err) {
      console.log(err.message)
    }
  }
}

export { AuthenticateUserController }