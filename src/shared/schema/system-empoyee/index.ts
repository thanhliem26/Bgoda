export interface Employee {
    id: string
    accountId: string
    phoneNumber: string
    address: string
    avatar: string
    roleId: number
    email: string
    dob: Date | null
    password: string
    bankNumber: string
    bank: string
    salary: number
    name: string
    fullName: string
    createdDate: string
    updatedDate: string
}

export type CreateEmployeeArguments = {
    email: string
    phoneNumber: string
    fullName: string
    address: string
    avatar: string
    name: string
    dob: Date
    salary: number
    bankNumber: string
    password: string
    roleId: number
    bank: string
}

export type UpdateEmployeeArguments = {
    id: string
    email: string
    phoneNumber: string
    fullName: string
    name: string
    address: string
    avatar: string
    dob: Date | null
    salary: number
    bankNumber: string
    roleId: number
    bank: string
}
