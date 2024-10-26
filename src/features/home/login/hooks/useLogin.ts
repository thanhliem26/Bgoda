
import { yupResolver } from "@hookform/resolvers/yup"
import useService from "../domain/services"
import { FormDataSchema, schema } from "../shared/constants/schema"
import useCreateResource from "shared/hooks/crud-hook/useCreateResource"
import { CreateUserArguments } from "shared/schema/user"
import handleAuthLocalStorage from "services/auth-local-storage-service"
interface IUseLoginProps {
  onSuccess?: (value: any) => void
}

function useLogin(props: IUseLoginProps = {}) {
  const { saveToken } = handleAuthLocalStorage();

  const { loginUser, queryKey } = useService()
  const { useCreateReturn, useFormReturn } = useCreateResource<
    CreateUserArguments,
    FormDataSchema
  >({
    mutationKey: [queryKey],
    queryString: loginUser,
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
    onSuccess: (data) => {
      const { metaData } = data;
      const token = metaData?.accessToken;
      saveToken({accessToken: token.toString()})

      window.location.reload()
    },
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

export default useLogin

