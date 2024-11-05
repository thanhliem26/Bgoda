import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { isRight, unwrapEither } from 'shared/utils/handleEither'
import useService from '../services'
import RESTClientService from 'services/axios-service-application'
import { MODLUE_QUERY_KEY } from 'shared/interfaces/common'

interface IUseGetAllSuggest {
    searchInput: string
}

type TypebpShortDTOs = {
  logo: string
  name: string
  roomNumber: number
}

type TypeprovinceShortDTOs = {
  image: string
  name: string
  roomNumber: number
}

export type ListSuggestBPANDPROVINCE = {
  name: string
  image: string
  room_number: number
}

const useGetListSuggest = ({ searchInput }: IUseGetAllSuggest) => {
  const { getListSuggest } = useService()

  const { data } = useQuery({
    queryKey: [MODLUE_QUERY_KEY.APPLICATION_LIST_SUGGEST, searchInput],
    queryFn: async () =>
      RESTClientService.fetchREST(getListSuggest(), {
        searchInput: searchInput
      }),
  })

  const listSuggest: ListSuggestBPANDPROVINCE[] = useMemo(() => {
    if (data && isRight(data)) {
      const { metaData } = unwrapEither(data);

      const bpShortDTOs: TypebpShortDTOs[] = metaData?.bpShortDTOs;
      const provinceShortDTOs: TypeprovinceShortDTOs[] = metaData?.provinceShortDTOs;

      const DTOBP: ListSuggestBPANDPROVINCE[] = bpShortDTOs.map((item) => ({name: item?.name, image: item?.logo, room_number: item?.roomNumber}));
      const PROVINCEDTO: ListSuggestBPANDPROVINCE[] = provinceShortDTOs.map((item) => ({name: item?.name, image: item?.image, room_number: item?.roomNumber}))

      return [...DTOBP, ...PROVINCEDTO]
    }
    return []
  }, [data])

  return {
    optionListSuggest: listSuggest,
  }
}

export default useGetListSuggest
