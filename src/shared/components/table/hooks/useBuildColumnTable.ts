import { TableProps } from "antd"
import { TOptionItem } from "./useBuildActionTable"

export interface IuseBuildColumnTable<T> {
    actions: TOptionItem<T>[]
    columns: (
        actions: TOptionItem<T>[],
    ) => TableProps<T>['columns']
}

const useBuildColumnTable = <
    T extends object,
>({
    columns,
    actions,
}: IuseBuildColumnTable<T>) => {

    return {
        columnTable: columns(actions) ?? [],
    }
}

export default useBuildColumnTable
