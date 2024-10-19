import { useMutation, useQueryClient } from '@tanstack/react-query'
import NotificationService from 'services/notification-service'
import { isLeft, unwrapEither } from 'shared/utils/handleEither'
import { BaseRecord } from 'shared/interfaces/common'
import ErrorException from 'shared/interfaces/response'
import { FieldValues, Resolver } from 'react-hook-form'
import RESTClientService, { IRequestReturn } from 'services/axios-service'
import useGetResource, { IuseGetResource } from './useGetResource'

interface IuseEditResource<Response, FormData>
  extends IuseGetResource<Response, FormData> {
  editBuildQuery: () => IRequestReturn
  id: string | number
  queryKey: string[]
  onSuccess?: (data: BaseRecord) => void
  onError?: (data: ErrorException | Error) => void
  resolver: Resolver<FormData & FieldValues, any> | undefined
}

function useEditResource<Response, FormData extends FieldValues, Request>({
  id,
  editBuildQuery,
  oneBuildQuery,
  queryKey,
  onSuccess,
  onError,
  resolver,
  formatDefaultValues,
}: IuseEditResource<Response, FormData>) {

  const queryClient = useQueryClient()
  const { useFormReturn, isGetting } = useGetResource<Response, FormData>({
    id: id,
    oneBuildQuery,
    queryKey: queryKey,
    resolver,
    formatDefaultValues,
  })

  const editQuery = editBuildQuery();
  const useEditReturn = useMutation({
    mutationKey: queryKey,
    mutationFn: (payload: Request) => {
      return RESTClientService.fetchREST(
        editQuery,
        payload as BaseRecord
      )
    },
    onSuccess: (data) => {
      if (isLeft(data)) {
        console.log("🚀 ~ data1111:", data)
        onError?.(unwrapEither(data))
        return NotificationService.showError(unwrapEither(data).message)
      }
      queryClient.invalidateQueries({
        queryKey: queryKey,
      })
      onSuccess?.(unwrapEither(data))
      return NotificationService.showSuccess('EDIT')
    },
    onError(error) {
      onError?.(error)
      NotificationService.showError(error.message)
    },
  })

  return {
    isGetting,
    useFormReturn,
    useEditReturn,
  }
}

export default useEditResource
