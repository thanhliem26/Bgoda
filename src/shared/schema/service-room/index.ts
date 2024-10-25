export interface ServiceRoom {
    id: string
    name: string
    description: string
    createdDate: string
    updatedDate: string
}

export type CreateServiceRoomArguments = {
    name: string
    description: string
}

export type UpdateServiceRoomArguments = {
    name: string
    description: string
}
