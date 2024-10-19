
export interface User {
    id: string
    name: string
    email: string
    password: string
    phone: string
    dob: string
    created_at: string
    updated_at: string
    deleted_at: string
    address: string
}

export type CreateUserArguments = {
    email: string
    password: string
}

export type UpdateUserArguments = {
    email: string
    password: string
}

export type DeleteUserArguments = {
    id: string
}