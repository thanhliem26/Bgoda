
export interface User {
    id: string
    name: string
    email: string
    password: string
    phone: string
    dob: string
    avatar: string
    salary: string
    bankNumber: string
    created_at: string
    updated_at: string
    deleted_at: string
    address: string
}

export type LoginUserArguments = {
    email: string
    password: string
}

export type CreateUserArguments = {
    email: string
    password: string
    fullName: string
}

export type UpdateUserArguments = {
    email: string
    password: string
}

export type DeleteUserArguments = {
    id: string
}

export type RegisterUserArguments = {
    email: string
    password: string
    name: string
    re_password: string
}