import { RULE_MESSAGES } from 'shared/constants/validate'
import * as yup from 'yup'

export const schema = yup.object({
  ownerName: yup.string().required(RULE_MESSAGES.MC1('Owner name')),
  bankNumber: yup.string().required(RULE_MESSAGES.MC1('Bank number')),
  bankId: yup.number().required(RULE_MESSAGES.MC1('Bank')).nullable().test('is_null', function () {
    const bankId = this.parent?.bankId
    if (!bankId) {
      return this.createError({
        path: this.path,
        message: RULE_MESSAGES.MC1('Bank'),
      })
    }
    return true
  }),
})

export type FormDataSchema = yup.InferType<typeof schema>

export const schemaUpdate = yup.object({
  ownerName: yup.string().required(RULE_MESSAGES.MC1('Owner name')),
  bankNumber: yup.string().required(RULE_MESSAGES.MC1('Bank number')),
  bankId: yup.number().required(RULE_MESSAGES.MC1('Bank')).nullable().test('is_null', function () {
    const bankId = this.parent?.bankId
    if (!bankId) {
      return this.createError({
        path: this.path,
        message: RULE_MESSAGES.MC1('Bank'),
      })
    }
    return true
  }),
  status: yup.bool().required(RULE_MESSAGES.MC1("Status")),
})

export type FormDataSchemaUpdate = yup.InferType<typeof schemaUpdate>