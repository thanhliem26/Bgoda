
import { yupResolver } from "@hookform/resolvers/yup"
import useCreateResource from "shared/hooks/crud-hook/useCreateResource"
import * as yup from 'yup'
import useService from "../services"

interface IActiveEmailProps {
    onSuccess?: (value: any) => void
    token: string
    onError?: () => void
}

function useActiveEmail(props: IActiveEmailProps) {
    const { onSuccess, token, onError } = props

    const { activeEmail, queryKey } = useService()
    const { useFormReturn, useCreateReturn } = useCreateResource<
        {},
        {}
    >({
        mutationKey: [queryKey],
        queryString: activeEmail,
        defaultValues: {},
        resolver: yupResolver(yup.object()),
        onSuccess: onSuccess,
        onError: onError
    })
    const { mutate } = useCreateReturn;
    const { handleSubmit } = useFormReturn

    function onSubmit() {
        handleSubmit(() => {
            //@ts-ignore
            mutate({
                token: token
            })
        })()
    }


    return {
        onSubmit,
    }
}

export default useActiveEmail
