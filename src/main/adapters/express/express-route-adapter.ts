import { Controller, HttpRequest } from '@/presentation/protocols'
import { Request, Response } from 'express'

export const adaptRoute = (controller: Controller<any>) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest<any> = {
      body: req.body,
      params: req.params,
      accountId: req.accountId
    }
    const httpResponse = await controller.handle(httpRequest)

    if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
      res.status(httpResponse.statusCode).json(httpResponse.body)
    } else {
      res.status(httpResponse.statusCode).json({
        error: httpResponse.body.message
      })
    }
  }
}
