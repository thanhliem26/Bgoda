import { BusinessPartner } from "../business-partner"
import { ServiceRoom } from "../service-room"

export interface Room {
    id: string
    name: string
    description: string
    thumbnail: string
    price: number
    roomTypeId: number
    services: ServiceRoom[]
    commune: string
    defaultDiscount: number
    district: string
    map: string
    province: string
    businessPartner: BusinessPartner
    businessPartnerId: number
    avaiable: number
    street: string
    address: string
    images: ImageRoom[]
    createdDate: string
    updatedDate: string
}

export type ImageRoom = {type: string, urls: string[]}
export type CreateRoomArguments = {
    description: string,
    defaultDiscount: number,
    name: string,
    price: number,
    roomTypeId: number,
    services: number[],
    avaiable: number,
    images: ImageRoom[],
    thumbnail: string,
}

export type UpdateRoomArguments = {
    id: string
    description: string,
    defaultDiscount: number,
    name: string,
    price: number,
    roomTypeId: number,
    services: number[],
    avaiable: number,
    images: ImageRoom[],
    thumbnail: string,
}
