import { useMutation, useQueryClient } from "@tanstack/react-query"
import RESTClientService, { IRequestReturn } from "services/axios-service"
import NotificationService from "services/notification-service"
import { BaseRecord } from "shared/interfaces/common"
import ErrorException from "shared/interfaces/response"
import { isLeft, unwrapEither } from "shared/utils/handleEither"

interface IuseDeleteResource {
    mutationKey: string[]
    queryString: () => IRequestReturn
    onError?: (error: ErrorException | Error) => void
    onSuccess?: (data: BaseRecord) => void
}

function useDeleteResource<Request>({
    mutationKey,
    queryString,
    onError,
    onSuccess,
}: IuseDeleteResource) {

    const queryClient = useQueryClient()
    const queryStringUrl = queryString()
    const useDeleteReturn = useMutation({
        mutationKey,
        mutationFn: (payload: Request) => {
            return RESTClientService.fetchREST(
                queryStringUrl,
                payload as BaseRecord
            )
        },
        onSuccess: (data) => {
            if (isLeft(data)) {
                onError?.(unwrapEither(data))

                return NotificationService.showError(unwrapEither(data).message)
            }
            queryClient.invalidateQueries({ queryKey: mutationKey })
            onSuccess?.(unwrapEither(data))
            return NotificationService.showSuccess('DELETE')
        },
        onError(error) {
            onError?.(error)

            NotificationService.showError(error.message)
        },
    })
    return {
        useDeleteReturn,
    }
}

export default useDeleteResource
