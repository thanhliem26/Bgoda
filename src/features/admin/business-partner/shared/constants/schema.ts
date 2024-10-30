import { RULE_MESSAGES } from 'shared/constants/validate'
import * as yup from 'yup'

export const schema = yup.object({
  fullName: yup
    .string()
    .required(RULE_MESSAGES.MC1('Name')),
  email: yup.string().email(RULE_MESSAGES.MC5('email')).required(RULE_MESSAGES.MC1('Email')),
  phoneNumber: yup.string().required(RULE_MESSAGES.MC1('Phone number')),
  logo: yup.string(),
  password: yup
    .string()
    .required(RULE_MESSAGES.MC1('password')),
  re_password: yup.string().oneOf([yup.ref('password')], RULE_MESSAGES.MC7('password'))
    .required(RULE_MESSAGES.MC1('password')),
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
  provinceId: yup.string().required(RULE_MESSAGES.MC1('Province')),
  districtId: yup.string().required(RULE_MESSAGES.MC1('district')),
  address: yup.string().required(RULE_MESSAGES.MC1('address')),
})

export type FormDataSchema = yup.InferType<typeof schema>

export const schemaUpdate = yup.object({
  fullName: yup
  .string()
  .required(RULE_MESSAGES.MC1('Name')),
email: yup.string().email(RULE_MESSAGES.MC5('email')).required(RULE_MESSAGES.MC1('Email')),
phoneNumber: yup.string().required(RULE_MESSAGES.MC1('Phone number')),
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
provinceId: yup.string().required(RULE_MESSAGES.MC1('Province')),
districtId: yup.string().required(RULE_MESSAGES.MC1('district')),
address: yup.string().required(RULE_MESSAGES.MC1('address')),
})

export type FormDataSchemaUpdate = yup.InferType<typeof schemaUpdate>