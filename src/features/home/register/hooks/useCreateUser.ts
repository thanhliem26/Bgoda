
import { yupResolver } from "@hookform/resolvers/yup"
import useService from "../domain/services"
import { FormDataSchema, schema } from "../shared/constants/schema"
import useCreateResource from "shared/hooks/crud-hook/useCreateResource"
import { CreateUserArguments } from "shared/schema/user"

interface createTeamProps {
  onSuccess?: (value: any) => void
}

function useCreateUser(props: createTeamProps = {}) {
  const { onSuccess } = props

  const { createUser, queryKey } = useService()
  const { useCreateReturn, useFormReturn } = useCreateResource<
    CreateUserArguments,
    FormDataSchema
  >({
    mutationKey: [queryKey],
    queryString: createUser,
    defaultValues: {
      email: '',
      password: '',
      name: '',
      re_password:''
    },
    resolver: yupResolver(schema),
    onSuccess: onSuccess,
  })

  const { handleSubmit, control, formState } = useFormReturn

  const isValid = !formState.isValid
  const { isPending, mutate } = useCreateReturn

  function onSubmit() {
    handleSubmit((value) => {

      mutate(value)
    })()
  }

  return {
    onSubmit,
    control,
    isValid,
    isPending,
    formState,
  }
}

export default useCreateUser
