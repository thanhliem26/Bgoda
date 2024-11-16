import { RULE_MESSAGES } from 'shared/constants/validate'
import * as yup from 'yup'

export const schema = yup.object({
  roomId: yup.number().required(RULE_MESSAGES.MC1('room')),
  rate: yup.number().required(RULE_MESSAGES.MC1('rate')),
  comment: yup.string().required(RULE_MESSAGES.MC1('comment'))
})

export type FormDataSchema = yup.InferType<typeof schema>


export const schemaUpdate = yup.object({
  id: yup.number().required(RULE_MESSAGES.MC1('room')),
  updateComment: yup.string().required(RULE_MESSAGES.MC1('comment')),
  rate: yup.number().required(RULE_MESSAGES.MC1('rate')),
})

export type FormDataSchemaUpdate = yup.InferType<typeof schemaUpdate>