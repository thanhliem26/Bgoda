
import { yupResolver } from "@hookform/resolvers/yup"
import useService from "../domain/services"
import { FormDataSchema, schema } from "../shared/constants/schema"
import useCreateResource from "shared/hooks/crud-hook/useCreateResource"
import { CreateRoleTemplateArguments } from "shared/schema/role-template"

interface createRoleTemplateProps {
  onSuccess?: (value: any) => void
}

function useCreateRoleTemplate(props: createRoleTemplateProps = {}) {
  const { onSuccess } = props

  const { createRoleTemplate, queryKey } = useService()
  const { useCreateReturn, useFormReturn } = useCreateResource<
    CreateRoleTemplateArguments,
    FormDataSchema
  >({
    mutationKey: [queryKey],
    queryString: createRoleTemplate,
    defaultValues: {
      name: '',
      permission: []
    },
    resolver: yupResolver(schema),
    onSuccess: onSuccess,
  })

  const { handleSubmit, control, formState, setValue } = useFormReturn

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
    setValue
  }
}

export default useCreateRoleTemplate
