import { BaseRecord } from "shared/interfaces/common"
import useService from "../domain/services"
import { yupResolver } from "@hookform/resolvers/yup"
import useEditResource from "shared/hooks/crud-hook/useEditResource"
import { FormDataSchemaUpdate, schemaUpdate } from "../shared/constants/schema"
import { ImageRoom, Room, UpdateRoomArguments } from "shared/schema/room"
import { v4 as uuidv4 } from 'uuid';
import { ImageType, TypeImages } from "../domain/interfaces"

type UseUpdateRoomModal = {
    id: string | number
    onSuccess: (data: BaseRecord) => void
}

function useUpdateRoomModal(props: UseUpdateRoomModal) {
    const { id, onSuccess } = props
    const { updateRoom, getRoom, queryKey } = useService()
    const { useEditReturn, useFormReturn, isGetting } = useEditResource<
        Room,
        FormDataSchemaUpdate,
        UpdateRoomArguments
    >({
        resolver: yupResolver(schemaUpdate),
        editBuildQuery: updateRoom,
        oneBuildQuery: getRoom,
        queryKey: [queryKey],
        id,
        onSuccess,
        formatDefaultValues(data) {
            const formatImages: TypeImages[] = data?.images?.map((item) => {
              return {
                id: uuidv4(),
                label: item.type,
                type: 'customize',
                urls: item.urls,
              }
            }) ?? []

            return {
                street: data?.street ?? "",
                description: data?.description ?? "",
                defaultDiscount: data?.defaultDiscount ?? null,
                district: data?.district ?? "",
                address: data?.address ?? "",
                name: data?.name ?? "",
                price: data?.price ?? null,
                province: data?.province ?? "",
                services: data?.services.map((item) => item.id) ?? [],
                avaiable: data?.avaiable ?? 1,
                images: formatImages,
                roomTypeId: data?.roomTypeId ?? null,
                thumbnail: data?.thumbnail ?? "",
            }
        },
    })


    const { handleSubmit, control, formState, setValue, watch } = useFormReturn
    const { isValid, isDirty} = formState;
    const isValidUpdate = !isValid || !isDirty

    const { mutate, isPending } = useEditReturn
    const images = watch('images');

    function onSubmit() {
        handleSubmit((value) => {
            const imagesFormat: ImageRoom[] = value?.images.map((item) => ({
                type: item.label,
                urls: item.urls as string[]
              }))
        
              const payload: UpdateRoomArguments = {
                id: id as string,
                street: value.street ?? '',
                description: value.description ?? '',
                defaultDiscount: value.defaultDiscount ?? 0,
                district: value.district,
                address: value?.address ?? '',
                name: value?.name,
                price: value?.price ?? 0,
                province: value?.province,
                services: value?.services,
                avaiable: value?.avaiable,
                roomTypeId: value?.roomTypeId ?? 0,
                images: imagesFormat ?? [],
                thumbnail: value?.thumbnail ?? '',
                //
                businessPartnerId: 1,
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
        control,
        isValid: isValidUpdate,
        isPending,
        onSubmit,
        formState,
        setValue,
        isGetting,
        watch,
        actions: {
            handleAddImage,
            handleDeleteImage,
            handleDeleteTypeImage,
            handleAddTypeImage,
            handleChangeCustomizeLabel
        }
    }
}

export default useUpdateRoomModal
