import { RULE_MESSAGES } from 'shared/constants/validate'
import * as yup from 'yup'

export const schema = yup.object({
    name: yup
        .string()
        .required(RULE_MESSAGES.MC1('name')),
    permission: yup.array().of(yup.string().required()).min(1, RULE_MESSAGES.MC1('permission')).required(RULE_MESSAGES.MC1('permission')),
})

export type FormDataSchema = yup.InferType<typeof schema>

export const schemaUpdate = yup.object({
    name: yup
        .string()
        .required(RULE_MESSAGES.MC1('name')),
    permission: yup.array().of(yup.string().required()).min(1, RULE_MESSAGES.MC1('permission')).required(RULE_MESSAGES.MC1('permission')),
})

export type FormDataSchemaUpdate = yup.InferType<typeof schemaUpdate>