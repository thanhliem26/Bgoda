export interface BusinessPartner {
    id: string
    companyName: string
    accountId: string
    phoneNumber: string
    address: string
    logo: string
    name: string
    roleId: number
    email: string
    createdDate: string
    updatedDate: string
}

export type CreateBusinessPartnerArguments = {
    fullName: string
    email: string
    phoneNumber: string
    address: string
    logo: string
    password: string
    roleId: number
}

export type UpdateBusinessPartnerArguments = {
    fullName: string
    email: string
    phoneNumber: string
    address: string
    logo: string
    roleId: number
}
