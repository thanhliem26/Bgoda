export interface Rating {
    id: string
    roomId: number
    rate: number
    comment: string
    fullName: string
    updateAble: boolean
    lastUpdatedDate: Date
    avatar: string
    createdDate: string
    updatedDate: string
}

export type CreateRatingArguments = {
    roomId: number
    rate: number
    comment: string
}

export type UpdateRatingArguments = {
    id: number
    updateComment: string
    rate: number
}
