import { RULE_MESSAGES } from 'shared/constants/validate'
import * as yup from 'yup'

export const schema = yup.object({
  name: yup.string().required(RULE_MESSAGES.MC1("name")),
  description: yup.string(),
  price: yup.number().required(RULE_MESSAGES.MC1('price')).min(1, RULE_MESSAGES.MC3('price', 1)).nullable().test('is_null', function () {
    const price = this.parent?.price
    if (!price) {
      return this.createError({
        path: this.path,
        message: RULE_MESSAGES.MC1('price'),
      })
    }
    return true
  }),
  roomTypeId: yup.number().required(RULE_MESSAGES.MC1('Room type')),
  services: yup.array().of(yup.number().required()).required(RULE_MESSAGES.MC1('service')).min(1, RULE_MESSAGES.MC1(RULE_MESSAGES.MC1('services'))),
  discount: yup.number().min(0, RULE_MESSAGES.MC2('discount', 0, 100)).max(100, RULE_MESSAGES.MC2('discount', 0, 100)).nullable(),
  map: yup.string(),
  province: yup.string().required(RULE_MESSAGES.MC1('Province')),
  district: yup.string().required(RULE_MESSAGES.MC1('district')),
  commune: yup.string().required(RULE_MESSAGES.MC1('commune')),
})

export type FormDataSchema = yup.InferType<typeof schema>

export const schemaUpdate = yup.object({
  fullName: yup
    .string()
    .required(RULE_MESSAGES.MC1('Name')),
  email: yup.string().email(RULE_MESSAGES.MC5('email')).required(RULE_MESSAGES.MC1('Email')),
  phoneNumber: yup.string().required(RULE_MESSAGES.MC1('Phone number')),
  address: yup.string().required(RULE_MESSAGES.MC1('address')),
  logo: yup.string(),
  roleId: yup.number().required(RULE_MESSAGES.MC1('Role')).nullable().test('is_null', function () {
    const roleId = this.parent?.roleId
    if (!roleId) {
      return this.createError({
        path: this.path,
        message: RULE_MESSAGES.MC1('Role'),
      })
    }
    return true
  }),
})

export type FormDataSchemaUpdate = yup.InferType<typeof schemaUpdate>