import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

interface IPlayload {
  sub: string
  role: string
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const autheHeard = request.headers.authorization

  if (!autheHeard) {
    throw new Error('Token missing')
  }

  const [, token] = autheHeard.split(' ')

  try {
    const { sub: user_id, role } = verify(
      token,
      'ac81a9ff47be796b7f2e4ccad808e14a',
    ) as IPlayload

    request.user = {
      id: user_id,
      role,
    }
    next()
  } catch {
    throw new Error('Invalid token')
  }
}
