export interface Room {
    id: string
    name: string
    description: string
    thumbnail: string
    price: number
    roomTypeId: number
    services: number[]
    commune: string
    discount: number
    district: string
    map: string
    province: string
    partner_id: number
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
    partner_id: number,
    roomTypeId: number,
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
    partner_id: number,
    roomTypeId: number,
    services: number[]
}
