import { RULE_MESSAGES } from 'shared/constants/validate'
import * as yup from 'yup'

export const schemaUpdate = yup.object({
    fullName: yup.string().required(RULE_MESSAGES.MC1('name')),
    dob: yup.date().nullable(),
    phoneNumber: yup.string(),
    avatar: yup.string(),
    address: yup.string(),
    gender: yup.string(),
    email: yup.string(),
})

export type FormDataSchemaUpdate = yup.InferType<typeof schemaUpdate>

export const schemaUpdatePassword = yup.object({
    oldPassword: yup
        .string()
        .required(RULE_MESSAGES.MC1('old password')),
    newPassword: yup
        .string()
        .required(RULE_MESSAGES.MC1('password')),
    reNewPassword: yup.string().oneOf([yup.ref('newPassword')], RULE_MESSAGES.MC7('New Password'))
        .required(RULE_MESSAGES.MC1('New Password'))
})

export type FormDataSchemaUpdatePassword = yup.InferType<typeof schemaUpdatePassword>