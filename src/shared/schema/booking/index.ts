export interface Booking {
    id: string
    name: string
    phoneNumber: string
    checkInDate: Date
    checkOutDate: Date
    roomId: number
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
    couponId: number | string
}

export type UpdateBookingArguments = {
    id: string
    name: string
    phoneNumber: string
    checkInDate: Date
    checkOutDate: Date
    roomId: number
    couponId: number | null
}
