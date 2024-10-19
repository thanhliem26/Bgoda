export type DefineActionTable<A extends string, T> = {
    [Key in A]: {
        key: Key
        disabled?: boolean | ((rowData: T) => boolean)
        onClick?: (id: string, row: T) => void
        label?: string 
        icon: JSX.Element
    }
}
export type TOptionItem<T> = {
    disabled?: boolean | ((rowData: T) => boolean)
    onClick?: (id: string, row: T) => void
    label?: string 
    icon: JSX.Element
    key: string
}


interface IUseBuildActionsTable<Actions extends string, T> {
    actions: DefineActionTable<Actions, T>
}

export interface IUseBuildActionsTableReturn<T> {
    actions: TOptionItem<T>[]
}

export function useBuildActionsTable<Actions extends string, T>(
    props: IUseBuildActionsTable<Actions, T>
): IUseBuildActionsTableReturn<T> {
    const { actions } = props
    const newActionTable: TOptionItem<T>[] = Object.keys(actions).map((key) => {
        const typedKey = key as Actions
        const item = actions[typedKey]
        return {
            ...item,
        }
    })
    return {
        actions: newActionTable,
    }
}
