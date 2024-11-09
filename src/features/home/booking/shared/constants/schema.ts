import { RULE_MESSAGES } from 'shared/constants/validate'
import * as yup from 'yup'

export const schema = yup.object({
  checkInDate: yup.date().required(RULE_MESSAGES.MC1('checkIn date')),
  checkOutDate: yup.date().required(RULE_MESSAGES.MC1('checkoutOut date')),
  roomId: yup.number().required(RULE_MESSAGES.MC1('room')),
  couponId: yup.number().nullable(),
  //
  name: yup.string().required(RULE_MESSAGES.MC1('name')),
  phoneNumber: yup.string().required(RULE_MESSAGES.MC1('phone number')),
  email: yup.string()
})

export type FormDataSchema = yup.InferType<typeof schema>