export const permissions = {
    account_manage: 'account_manage',
    booking_manage: 'booking_manage',
    role_manage: 'role_manage',
    discount_manage: 'discount_manage',
    rating_manage: 'rating_manage',
    room_manage: 'room_manage',
    service_manage: 'service_manage',
}

export type TYPE_PERMISSION = keyof typeof permissions;