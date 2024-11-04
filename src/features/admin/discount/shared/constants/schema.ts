import { RULE_MESSAGES } from 'shared/constants/validate'
import * as yup from 'yup'

export const schema = yup.object({
  name: yup.string().required(RULE_MESSAGES.MC1('name')),
  image: yup.string().required(RULE_MESSAGES.MC1('image')),
  description: yup.string(),
  discountType: yup.number().required(RULE_MESSAGES.MC1('discount type')),
  startDate: yup.date().required(RULE_MESSAGES.MC1('start date')).test('is-before-end-date', RULE_MESSAGES.MC1('start date phải nhỏ hơn end date'), function (value) {
    const { endDate } = this.parent;
    return value && endDate ? value < endDate : true;
  }),
  endDate: yup.date().required(RULE_MESSAGES.MC1('end date')),
  discountMax: yup.number().required(RULE_MESSAGES.MC1('discount max')).min(1, RULE_MESSAGES.MC3('discount max', 1)),
  roomApplyIds: yup.array().of(yup.number().required()).required().min(1, RULE_MESSAGES.MC1('room apply')),
  discountValue: yup.number().required(RULE_MESSAGES.MC1('discount apply')).nullable().test('is_null', function () {
    const discountValue = this.parent?.discountValue
    if (!discountValue) {
      return this.createError({
        path: this.path,
        message: RULE_MESSAGES.MC1('discount apply'),
      })
    }
    return true
  }).nullable().when('discountType', ([discountType], schema) => {
    return discountType === 1
      ? schema.max(100, 'discount max phải nhỏ hơn 100 với discount type là percentage')
      : schema;
  }).test('is_null', function () {
    const discountValue = this.parent?.discountValue
    if (!discountValue) {
      return this.createError({
        path: this.path,
        message: RULE_MESSAGES.MC1('discount value'),
      })
    }
    return true
  }),
  allRoom: yup.bool()
})

export type FormDataSchema = yup.InferType<typeof schema>

export const schemaUpdate = yup.object({
  name: yup.string().required(RULE_MESSAGES.MC1('name')),
  image: yup.string().required(RULE_MESSAGES.MC1('image')),
  description: yup.string(),
  discountType: yup.number().required(RULE_MESSAGES.MC1('discount type')),
  startDate: yup.date().required(RULE_MESSAGES.MC1('start date')).test('is-before-end-date', RULE_MESSAGES.MC1('start date phải nhỏ hơn end date'), function (value) {
    const { endDate } = this.parent;
    return value && endDate ? value < endDate : true;
  }),
  endDate: yup.date().required(RULE_MESSAGES.MC1('end date')),
  discountMax: yup.number().required(RULE_MESSAGES.MC1('discount max')).min(1, RULE_MESSAGES.MC3('discount max', 1)),
  roomApplyIds: yup.array().of(yup.number().required()).required().min(1, RULE_MESSAGES.MC1('room apply')),
  discountValue: yup.number().required(RULE_MESSAGES.MC1('discount apply')).nullable().test('is_null', function () {
    const discountValue = this.parent?.discountValue
    if (!discountValue) {
      return this.createError({
        path: this.path,
        message: RULE_MESSAGES.MC1('discount apply'),
      })
    }
    return true
  }).nullable().when('discountType', ([discountType], schema) => {
    return discountType === 1
      ? schema.max(100, 'discount max phải nhỏ hơn 100 với discount type là percentage')
      : schema;
  }).test('is_null', function () {
    const discountValue = this.parent?.discountValue
    if (!discountValue) {
      return this.createError({
        path: this.path,
        message: RULE_MESSAGES.MC1('discount value'),
      })
    }
    return true
  }),
  allRoom: yup.bool()
})

export type FormDataSchemaUpdate = yup.InferType<typeof schemaUpdate>