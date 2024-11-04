export interface Discount {
    id: string
    name: string
    image: string
    description: string
    discountType: number
    startDate: Date
    discountValue: number
    endDate: Date
    discountMax: number
    roomApplyIds: number[]
    discountApply: number
    createdDate: string
    updatedDate: string
}

export type CreateDiscountArguments = {
    name: string
    image: string
    description: string
    discountType: number
    startDate: Date
    endDate: Date
    discountMax: number
    roomApplyIds: number[]
    discountValue: number
}

export type UpdateDiscountArguments = {
    id: string
    name: string
    image: string
    description: string
    discountType: number
    startDate: Date
    endDate: Date
    discountMax: number
    roomApplyIds: number[]
    discountValue: number
}
