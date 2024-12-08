export interface ServiceRoom {
    id: number | string
    name: string
    description: string
    icon: string
    createdDate: string
    updatedDate: string
}

export type CreateServiceRoomArguments = {
    name: string
    description: string
    icon: string
}

export type UpdateServiceRoomArguments = {
    name: string
    description: string
    icon: string
}
