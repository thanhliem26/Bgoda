import { RULE_MESSAGES } from 'shared/constants/validate'
import * as yup from 'yup'

export const schema = yup.object({
    email: yup
        .string()
        .email()
        .required(RULE_MESSAGES.MC1('email'))
        .max(255, RULE_MESSAGES.MC4('email', 255)),
    name: yup.string().required(RULE_MESSAGES.MC1('name')),
    dob: yup.date().nullable(),
    phone_number: yup.string(),
    avatar: yup.string(),
    salary: yup.string(),
    bank_number: yup.string(),
    address: yup.string(),
    role: yup.string().required(RULE_MESSAGES.MC1('role')),
    password: yup
        .string()
        .required(RULE_MESSAGES.MC1('password')),
    re_password: yup.string().oneOf([yup.ref('password')], RULE_MESSAGES.MC7('password'))
        .required(RULE_MESSAGES.MC1('password'))
})

export type FormDataSchema = yup.InferType<typeof schema>

export const schemaUpdate = yup.object({
    email: yup
        .string()
        .email()
        .required(RULE_MESSAGES.MC1('email'))
        .max(255, RULE_MESSAGES.MC4('email', 255)),
    name: yup.string().required(RULE_MESSAGES.MC1('name')),
    dob: yup.number(),
    phone_number: yup.string(),
    avatar: yup.string(),
    salary: yup.string(),
    bank_number: yup.string(),
    address: yup.string(),
    role: yup.string().required(RULE_MESSAGES.MC1('role')),
    password: yup
        .string()
        .required(RULE_MESSAGES.MC1('password')),
    re_password: yup.string().oneOf([yup.ref('password')], RULE_MESSAGES.MC7('password'))
        .required(RULE_MESSAGES.MC1('password'))
})

export type FormDataSchemaUpdate = yup.InferType<typeof schemaUpdate>