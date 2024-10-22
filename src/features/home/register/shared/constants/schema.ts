import { RULE_MESSAGES } from 'shared/constants/validate'
import * as yup from 'yup'

export const schema = yup.object({
    name: yup.string().required(RULE_MESSAGES.MC1('name')).max(64, RULE_MESSAGES.MC4('name', 64)),
    email: yup
        .string()
        .email()
        .required(RULE_MESSAGES.MC1('email'))
        .max(255, RULE_MESSAGES.MC4('email', 255)),
    password: yup
        .string()
        .required(RULE_MESSAGES.MC1('password')),
    re_password: yup.string() .oneOf([yup.ref('password')], RULE_MESSAGES.MC7('password')) // Kiểm tra re_password khớp với password
    .required(RULE_MESSAGES.MC1('password'))
})

export type FormDataSchema = yup.InferType<typeof schema>
