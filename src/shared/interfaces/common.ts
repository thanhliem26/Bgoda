export type BaseRecord = {
    [key: string]: any
}

export type SortTypeTable = "ascend" | "descend"

export type ResponseServer = {
    message: string
    metaData: BaseRecord
    options: null | BaseRecord
    status: number
}

export type ResponseOptionServer = {
    name: string
    roleLabel: string
}

export type Left<T> = {
    left: T
    right?: never
}

export type Right<U> = {
    left?: never
    right: U
}

export type Either<T, U> = NonNullable<Left<T> | Right<U>>

export enum MODLUE_QUERY_KEY {
    ADMIN_USER = 'admin_user',
    ADMIN_ROOM = 'admin_room',
    ADMIN_BUSINESS_PARTNER = 'admin_business_partner',
    ROLE_TEMPLATE = 'role_template',
    PERMISSION = 'permission',
    LOGIN_USER = 'login',
}

