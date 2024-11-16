import { useMutation, useQueryClient } from '@tanstack/react-query'
import { DefaultValues, FieldValues, Resolver, useForm } from 'react-hook-form'
import RESTClientService, { IRequestReturn } from 'services/axios-service'
import NotificationService from 'services/notification-service'
import { BaseRecord, ResponseServer } from 'shared/interfaces/common'
import ErrorException from 'shared/interfaces/response'
import { isLeft, unwrapEither } from 'shared/utils/handleEither'

type AsyncDefaultValues<TFieldValues> = (
  payload?: unknown
) => Promise<TFieldValues>

interface IUseCreateResource<P> {
  mutationKey: string[]
  queryString: () => IRequestReturn
  onError?: (error: ErrorException | Error) => void
  onSuccess?: (data: ResponseServer) => void
  defaultValues?: DefaultValues<P> | AsyncDefaultValues<P>
  resolver: Resolver<P & FieldValues, any> | undefined
}

function useCreateResource<T, P extends FieldValues>({
  mutationKey,
  queryString,
  defaultValues,
  resolver,
  onError,
  onSuccess,
}: IUseCreateResource<P>) {
  const queryClient = useQueryClient()
  const useFormReturn = useForm<P>({
    defaultValues,
    mode: 'onChange',
    resolver: resolver,
  })

  const queryStringUrl = queryString()
  const useCreateReturn = useMutation({
    mutationKey,
    mutationFn: (payload: T) => {
      return RESTClientService.fetchREST(queryStringUrl, payload as BaseRecord)
    },
    onSuccess: (data) => {
      if (isLeft(data)) {
        if (onError) {
          return onError?.(unwrapEither(data))
        }

        return NotificationService.showError(data?.left?.message)
      }
      queryClient.invalidateQueries({ queryKey: mutationKey })
      onSuccess?.(unwrapEither(data) as ResponseServer)

      return NotificationService.showSuccess('CREATE', unwrapEither(data)?.message)
    },
    onError(error) {
      if (onError) {
        return onError?.(error)
      }
      return NotificationService.showError(error.message)
    },
  })
  return {
    useCreateReturn,
    useFormReturn,
  }
}

export default useCreateResource
