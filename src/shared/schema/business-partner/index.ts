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
    districtId: string
    provinceId: string
    streetId: string
    roleName: string
    createdDate: string
    updatedDate: string
}

export type CreateBusinessPartnerArguments = {
    fullName: string
    email: string
    name: string
    phoneNumber: string
    address: string
    logo: string
    password: string
    roleId: number
    provinceId: string
    districtId: string
    streetId: string
}

export type UpdateBusinessPartnerArguments = {
    id: string
    fullName: string
    email: string
    name: string
    phoneNumber: string
    address: string
    logo: string
    roleId: number
    provinceId: string
    districtId: string
    streetId: string
}
