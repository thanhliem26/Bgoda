export interface RoomType {
    id: string
    name: string
    description: string
    createdDate: string
    updatedDate: string
}

export type CreateRoomTypeArguments = {
    name: string
    description: string
}

export type UpdateRoomTypeArguments = {
    name: string
    description: string
}
