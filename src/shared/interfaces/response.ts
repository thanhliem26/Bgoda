import { isArray } from 'lodash'
import { BaseRecord, Either } from './common'

class ErrorException {
  message: string
  code: string
  constructor({ message, code }: ErrorException) {
    this.message = message
    this.code = code
  }

  static hasError(json: BaseRecord): boolean {
    if (json?.['status'] === 'error' || json?.['error'] || (json?.['errors'] && isArray(json?.['errors'])))
      return true
    return false
  }

  static fromJson(json: BaseRecord): ErrorException {
    const code = json?.['status'] ?? 500
    if (json?.['message'])
      return {
        code: code,
        message: json?.['message'],
      }
    if (json?.['errors'] && isArray(json?.['errors'])) {
      const errors = json?.['errors'] as []
      const message: string = errors
        .map((x) => {
          return x?.['message']
        })
        .join('/n') as string
      return {
        code: code,
        message: message,
      }
    }
    return {
      code: code,
      message: '',
    }
  }
}

export type CustomAxiosResponse = Either<ErrorException, BaseRecord>
export default ErrorException
