export interface Employee {
    id: string
    accountId: string
    phoneNumber: string
    address: string
    avatar: string
    fullName: string
    roleId: number
    email: string
    dob: Date | null
    password: string
    bankNumber: string
    salary: number
    createdDate: string
    updatedDate: string
}

export type CreateEmployeeArguments = {
    fullName: string
    email: string
    phoneNumber: string
    address: string
    avatar: string
    name: string
    dob: Date
    salary: number
    bankNumber: string
    password: string
    roleId: number
}

export type UpdateEmployeeArguments = {
    fullName: string
    email: string
    phoneNumber: string
    name: string
    address: string
    avatar: string
    dob: Date | null
    salary: number
    bankNumber: string
    password: string
    roleId: number
}
