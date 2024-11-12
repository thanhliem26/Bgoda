
import { yupResolver } from "@hookform/resolvers/yup"
import useCreateResource from "shared/hooks/crud-hook/useCreateResource"
import useService from "../services"
import { FormDataSchema, schema } from "../shared/constants/schema"
import dayjs from "dayjs"
import { CreateBookingArguments } from "shared/schema/booking"
import { useContext, useEffect } from "react"
import AuthUserContext from "layouts/context"
import { useParams } from "react-router-dom"

interface ICreateBookingProps {
    onSuccess?: (value: any) => void
}

function useCreateBooking(props: ICreateBookingProps = {}) {
    const { onSuccess } = props
    const { userInfo } = useContext(AuthUserContext)
    const { id } = useParams()

    const { createBooking, queryKey } = useService()
    const { useCreateReturn, useFormReturn } = useCreateResource<
        CreateBookingArguments,
        FormDataSchema
    >({
        mutationKey: [queryKey],
        queryString: createBooking,
        defaultValues: {
            checkInDate: dayjs().toDate(),
            checkOutDate: dayjs().add(1, 'day').toDate(),
            couponId: null,
            name: '',
            phoneNumber: '',
            email: '',
            roomId: Number(id),
        },
        resolver: yupResolver(schema),
        onSuccess: onSuccess,
    })

    const { handleSubmit, control, formState, setValue, watch, getValues } = useFormReturn

    const isValid = !formState.isValid
    const { isPending, mutate } = useCreateReturn

    function onSubmit() {
        handleSubmit((value) => {
            const payload: CreateBookingArguments = {
                checkInDate: value?.checkInDate,
                checkOutDate: value?.checkOutDate,
                couponId: value?.couponId ?? null,
                name: value?.name,
                phoneNumber: value?.phoneNumber,
                roomId: value?.roomId
            }

            mutate(payload)
        })()
    }

    useEffect(() => {
        setValue('email', userInfo?.email, { shouldDirty: true, shouldValidate: true })
        setValue('phoneNumber', userInfo?.phoneNumber ?? '', { shouldDirty: true, shouldValidate: true })
        setValue('name', userInfo?.name ?? '', { shouldDirty: true, shouldValidate: true })
    }, [userInfo])

    return {
        onSubmit,
        control,
        isValid,
        isPending,
        formState,
        setValue,
        watch,
        getValues
    }
}

export default useCreateBooking
