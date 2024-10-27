export interface Room {
    id: string
    name: string
    description: string
    thumbnail: string
    price: number
    roomTypeId: number
    services: number[]
    createdDate: string
    updatedDate: string
}

export type CreateRoomArguments = {
    commune: string,
    description: string,
    discount: number,
    district: string,
    map: string,
    name: string,
    price: number,
    province: string,
    services: number[]
}

export type UpdateRoomArguments = {
    commune: string,
    description: string,
    discount: number,
    district: string,
    map: string,
    name: string,
    price: number,
    province: string,
    services: number[]
}
