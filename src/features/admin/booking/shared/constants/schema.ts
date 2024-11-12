import { RULE_MESSAGES } from 'shared/constants/validate'
import * as yup from 'yup'

export const schemaUpdate = yup.object({
  name: yup.string().required(RULE_MESSAGES.MC1('name')),
  checkInDate: yup.date().required(RULE_MESSAGES.MC1('start date')).test('is-before-end-date', RULE_MESSAGES.MC1('checkIn date phải nhỏ hơn end date'), function (value) {
    const { endDate } = this.parent;
    return value && endDate ? value < endDate : true;
  }),
  checkOutDate: yup.date().required(RULE_MESSAGES.MC1('checkOut date')),
  phoneNumber: yup.string().required(RULE_MESSAGES.MC1('phone number')),
  roomId: yup.number().required(RULE_MESSAGES.MC1('room')).nullable()
    .test('is_null', function () {
      const roomId = this.parent?.roomId
      if (!roomId) {
        return this.createError({
          path: this.path,
          message: RULE_MESSAGES.MC1('room'),
        })
      }
      return true
    }),
  couponId: yup.number().required(RULE_MESSAGES.MC1('room')).nullable()
    .test('is_null', function () {
      const couponId = this.parent?.couponId
      if (!couponId) {
        return this.createError({
          path: this.path,
          message: RULE_MESSAGES.MC1('room'),
        })
      }
      return true
    }),
  cccd: yup.string(),
})

export const schemaReceived = yup.object({
  received: yup.array()
})

export type FormDataSchemaReceive = yup.InferType<typeof schemaReceived>