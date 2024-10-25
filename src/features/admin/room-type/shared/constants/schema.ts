import { RULE_MESSAGES } from 'shared/constants/validate'
import * as yup from 'yup'

export const schema = yup.object({
    name: yup
        .string()
        .required(RULE_MESSAGES.MC1('name')),
    description: yup.string()
})

export type FormDataSchema = yup.InferType<typeof schema>

export const schemaUpdate = yup.object({
    name: yup
        .string()
        .required(RULE_MESSAGES.MC1('name')),
    description: yup.string()
})

export type FormDataSchemaUpdate = yup.InferType<typeof schemaUpdate>