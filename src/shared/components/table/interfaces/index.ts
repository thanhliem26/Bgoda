import { BaseRecord } from "shared/interfaces/common"

export interface ISearchData {
    [key: string]: string
}

export type ISorting = {
    direction: 'ASC' | 'DESC'
    field: string
}

export interface IUseCustomCommonTable {
    search?: ISearchData
    filters?: BaseRecord
    perPage?: number
    orderBy?: ISorting
    variables?: BaseRecord
}
