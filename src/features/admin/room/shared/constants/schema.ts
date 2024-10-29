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
  roomTypeId: yup.number().required(RULE_MESSAGES.MC1('Room type')).nullable().test('is_null', function () {
    const roomTypeId = this.parent?.roomTypeId
    if (!roomTypeId) {
      return this.createError({
        path: this.path,
        message: RULE_MESSAGES.MC1('Room type'),
      })
    }
    return true
  }),
  services: yup.array().of(yup.number().required()).required(RULE_MESSAGES.MC1('service')).min(1, RULE_MESSAGES.MC1(RULE_MESSAGES.MC1('services'))),
  defaultDiscount: yup.number().min(0, RULE_MESSAGES.MC2('discount', 0, 100)).max(100, RULE_MESSAGES.MC2('discount', 0, 100)).nullable(),
  images: yup.array().of(yup.object({id: yup.string().required(), label: yup.string().required(),type: yup.string().required(), urls: yup.array().required().of(yup.string())})).required(RULE_MESSAGES.MC1('images')),
  avaiable: yup.number().required(RULE_MESSAGES.MC1('avaiable')).min(1),
  province: yup.string().required(RULE_MESSAGES.MC1('Province')),
  district: yup.string().required(RULE_MESSAGES.MC1('district')),
  address: yup.string().required(RULE_MESSAGES.MC1('address')),
  street: yup.string(),
  thumbnail: yup.string().required(RULE_MESSAGES.MC1('Thumbnail'))
})

export type FormDataSchema = yup.InferType<typeof schema>

export const schemaUpdate = yup.object({
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
  roomTypeId: yup.number().required(RULE_MESSAGES.MC1('Room type')).nullable().test('is_null', function () {
    const roomTypeId = this.parent?.roomTypeId
    if (!roomTypeId) {
      return this.createError({
        path: this.path,
        message: RULE_MESSAGES.MC1('Room type'),
      })
    }
    return true
  }),
  services: yup.array().of(yup.number().required()).required(RULE_MESSAGES.MC1('service')).min(1, RULE_MESSAGES.MC1(RULE_MESSAGES.MC1('services'))),
  defaultDiscount: yup.number().min(0, RULE_MESSAGES.MC2('discount', 0, 100)).max(100, RULE_MESSAGES.MC2('discount', 0, 100)).nullable(),
  images: yup.array().of(yup.object({id: yup.string().required(), label: yup.string().required(),type: yup.string().required(), urls: yup.array().required().of(yup.string())})).required(RULE_MESSAGES.MC1('images')),
  avaiable: yup.number().required(RULE_MESSAGES.MC1('avaiable')).min(1),
  province: yup.string().required(RULE_MESSAGES.MC1('Province')),
  district: yup.string().required(RULE_MESSAGES.MC1('district')),
  address: yup.string().required(RULE_MESSAGES.MC1('address')),
  street: yup.string(),
  thumbnail: yup.string().required(RULE_MESSAGES.MC1('Thumbnail'))
})

export type FormDataSchemaUpdate = yup.InferType<typeof schemaUpdate>