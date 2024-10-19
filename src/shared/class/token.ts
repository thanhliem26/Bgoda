
import { jwtDecode } from 'jwt-decode'

class Token {
  accessToken: string

  constructor({ accessToken }: Token) {
    this.accessToken = accessToken
  }

  static fromJson(data: Record<string, any>): Token {
    return new Token({
      accessToken: (data.accessToken as string) ?? '',
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
