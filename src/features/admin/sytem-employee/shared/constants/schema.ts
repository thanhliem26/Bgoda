import { RULE_MESSAGES } from 'shared/constants/validate'
import * as yup from 'yup'

export const schema = yup.object({
  fullName: yup
    .string()
    .required(RULE_MESSAGES.MC1('Name')),
  email: yup.string().email(RULE_MESSAGES.MC5('email')).required(RULE_MESSAGES.MC1('Email')),
  phoneNumber: yup.string(),
  address: yup.string(),
  dob: yup.date().required(RULE_MESSAGES.MC1('Dob')).nullable().test('is_null', function () {
    const dob = this.parent?.dob
    if (!dob) {
      return this.createError({
        path: this.path,
        message: RULE_MESSAGES.MC1('Dob'),
      })
    }
    return true
  }),
  salary: yup.number(),
  bankNumber: yup.string(),
  avatar: yup.string(),
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
})

export type FormDataSchema = yup.InferType<typeof schema>

export const schemaUpdate = yup.object({
  fullName: yup
    .string()
    .required(RULE_MESSAGES.MC1('Name')),
  email: yup.string().email(RULE_MESSAGES.MC5('email')).required(RULE_MESSAGES.MC1('Email')),
  phoneNumber: yup.string(),
  address: yup.string(),
  dob: yup.date().required(RULE_MESSAGES.MC1('Dob')).nullable().test('is_null', function () {
    const dob = this.parent?.dob
    if (!dob) {
      return this.createError({
        path: this.path,
        message: RULE_MESSAGES.MC1('Dob'),
      })
    }
    return true
  }),
  salary: yup.number(),
  bankNumber: yup.string(),
  avatar: yup.string(),
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
})

export type FormDataSchemaUpdate = yup.InferType<typeof schemaUpdate>