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
    ADMIN_ME = 'admin_me',
    ADMIN_ROOM_SERVICE = 'admin_room_service',
    ADMIN_BUSINESS_PARTNER = 'admin_business_partner',
    ADMIN_SYSTEM_EMPLOYEE = 'admin_system_employee',
    ADMIN_ROOM_TYPE = 'admin_room_type',
    ROLE_TEMPLATE = 'role_template',
    PERMISSION = 'permission',
    LOGIN_USER = 'login',
    PROVINCE = 'province',
    APPLICATION_ROOM_TYPE = 'application_room_type',
    APPLICATION_BUSINESS_PARTNER = 'application_business_partner',
    APPLICATION_POPULAR_VISIT = 'application_popular_visit'
}

export type IOption =  {
    label: string;
    value: string;
}