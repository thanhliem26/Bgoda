
import { yupResolver } from "@hookform/resolvers/yup"
import useService from "../domain/services"
import { FormDataSchema, schema } from "../shared/constants/schema"
import useCreateResource from "shared/hooks/crud-hook/useCreateResource"
import { CreateRoomArguments, ImageRoom } from "shared/schema/room"
import { v4 as uuidv4 } from 'uuid';
import { ImageType, TypeImages } from "../domain/interfaces"
interface IcreateRoomProps {
  onSuccess?: (value: any) => void
}

const defaultImage: TypeImages[] = [
  {id: uuidv4(), label: 'Room', urls: [], type: 'fixed'},
  {id: uuidv4(), label: 'Hotel', urls: [],  type: 'fixed'},
  {id: uuidv4(), label: 'Food', urls: [],  type: 'fixed'},
]

function useCreateRoom(props: IcreateRoomProps = {}) {
  const { onSuccess } = props

  const { createRoom, queryKey } = useService()
  const { useCreateReturn, useFormReturn } = useCreateResource<
    CreateRoomArguments,
    FormDataSchema
  >({
    mutationKey: [queryKey],
    queryString: createRoom,
    defaultValues: {
      description: '',
      defaultDiscount: null,
      name: '',
      price: null,
      services: [],
      avaiable: 1,
      images: defaultImage,
      roomTypeId: null,
    },
    resolver: yupResolver(schema),
    onSuccess: onSuccess,
  })

  const { handleSubmit, control, formState, setValue, watch } = useFormReturn

  const isValid = !formState.isValid
  const { isPending, mutate } = useCreateReturn

  const images = watch('images');

  function onSubmit() {
    handleSubmit((value) => {
      const imagesFormat: ImageRoom[] = value?.images.map((item) => ({
        type: item.label,
        urls: item.urls as string[]
      }))

      const payload: CreateRoomArguments = {
        description: value.description ?? '',
        defaultDiscount: value.defaultDiscount ?? 0,
        name: value?.name,
        price: value?.price ?? 0,
        services: value?.services,
        avaiable: value?.avaiable,
        roomTypeId: value?.roomTypeId ?? 0,
        images: imagesFormat ?? [],
        thumbnail: value?.thumbnail ?? '',
      }

      mutate(payload)
    })()
  }

  const handleAddImage = ({id, url}: {id: string, url: string}) => {
    const newImages = images.map((item) => {
      if(item.id === id) item.urls.push(url);
      return item;
    })
    setValue('images', newImages)
  }

  const handleDeleteImage = ({id, url}: {id: string, url: string}) => {
    const newImages = images.map((item) => {
      if(item.id === id) {
        const newUrls = item.urls.filter((itemImage) => {
          return itemImage !== url;
        })
        item.urls = newUrls;
      }
      return item;
    })
    setValue('images', newImages)
  }

  const handleDeleteTypeImage = ({id}: {id: string}) => {
    const newImages = images.filter((item) => {
      return item.id !== id;
    })
    setValue('images', newImages)
  }

  const handleAddTypeImage = () => {
    const customizeLength = images.filter((item) => item.type === ImageType.CUSTOMIZE).length;
    setValue('images', [...images, {id: uuidv4(), label: `Cutomize ${customizeLength + 1}`, urls: [], type: ImageType.CUSTOMIZE}])
  }

  const handleChangeCustomizeLabel = ({id, label}: {id: string, label: string}) => {
    const newImages = images.map((item) => {
      if(item.id === id) item.label = label;
      return item;
    })
   
    setValue('images', newImages)
  }

  return {
    onSubmit,
    control,
    isValid,
    isPending,
    formState,
    setValue,
    watch,
    handleAddImage,
    handleDeleteImage,
    handleDeleteTypeImage,
    handleAddTypeImage,
    handleChangeCustomizeLabel
  }
}

export default useCreateRoom
