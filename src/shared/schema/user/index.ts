
export interface User {
    id: string
    name: string
    email: string
    gender: string
    password: string
    address: string
    avatar: string
    accountId: string
    phoneNumber: string
    dob: Date
    active: boolean
    created_at: string
    updated_at: string
    deleted_at: string
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

export type UpdateTouristArguments = {
    id: string
    email: string
    fullName: string
    address: string
    avatar: string
    dob: Date | null,
    gender: string
    phoneNumber: string
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