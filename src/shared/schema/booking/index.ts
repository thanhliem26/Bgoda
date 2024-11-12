import { Room } from "../room"

export interface Booking {
    id: string
    name: string
    phoneNumber: string
    checkInDate: Date
    checkOutDate: Date
    roomId: number
    totalPrice: number
    approved: boolean
    cccd: string
    roomDetail: Room
    couponId: number | null
    createdDate: string
    updatedDate: string
}

export type CreateBookingArguments = {
    name: string
    phoneNumber: string
    checkInDate: Date
    checkOutDate: Date
    roomId: number
    couponId: number | null
}

export type UpdateBookingArguments = {
    id: string
    name: string
    phoneNumber: string
    cccd: string
    checkInDate: Date
    checkOutDate: Date
    roomId: number | null
    couponId: number | null
}

export type UpdateReceivedBookingArguments = {
    received: string[]
}
