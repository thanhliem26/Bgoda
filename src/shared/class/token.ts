
import { jwtDecode } from 'jwt-decode'

class Token {
  accessToken: string
  type: string

  constructor({ accessToken, type }: Token) {
    this.accessToken = accessToken
    this.type = type
  }

  static fromJson(data: Record<string, any>): Token {
    return new Token({
      accessToken: (data.accessToken as string) ?? '',
      type: (data.type as string) ?? ''
    })
  }

  static isValidToken = (accessToken: string): boolean => {
    try {
      if (!accessToken) return false
      jwtDecode(accessToken)
      return true
    } catch (error) {
      return false
    }
  }
}

export default Token
