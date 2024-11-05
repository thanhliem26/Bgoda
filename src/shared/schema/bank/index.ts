export interface Bank {
    id: string
    ownerName: string
    bankId: number
    bankNumber: string
    bankName: string
    status: boolean
    logo: string
    createdDate: string
    updatedDate: string
}

export type CreateBankArguments = {
    ownerName: string
    bankId: number
    bankNumber: string
}

export type UpdateBankArguments = {
    id: string
    ownerName: string
    bankId: number
    bankNumber: string
    status: boolean
}
