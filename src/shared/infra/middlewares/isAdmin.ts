import { Request, Response, NextFunction } from 'express'

export function isAdmin(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  if (request.user && request.user.role === 'admin') {
    next()
  } else {
    return response.status(403).json({ error: 'Unauthorized' })
  }
}
