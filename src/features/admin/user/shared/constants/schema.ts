import { RULE_MESSAGES } from 'shared/constants/validate'
import * as yup from 'yup'

export const schema = yup.object({
    email: yup
        .string()
        .email()
        .required(RULE_MESSAGES.MC1('email'))
        .max(255, RULE_MESSAGES.MC4('email', 255)),
    password: yup
        .string()
        .required(RULE_MESSAGES.MC1('password'))
        .max(255, RULE_MESSAGES.MC4('password', 255)),
})

export type FormDataSchema = yup.InferType<typeof schema>

export const schemaUpdate = yup.object({
    email: yup
        .string()
        .email()
        .required(RULE_MESSAGES.MC1('email'))
        .max(255, RULE_MESSAGES.MC4('email', 255)),
    password: yup
        .string()
        .required(RULE_MESSAGES.MC1('password'))
        .max(255, RULE_MESSAGES.MC4('password', 255)),
})

export type FormDataSchemaUpdate = yup.InferType<typeof schemaUpdate>