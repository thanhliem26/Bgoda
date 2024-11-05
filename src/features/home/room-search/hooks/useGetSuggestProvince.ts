import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { isRight, unwrapEither } from 'shared/utils/handleEither'
import useService from '../services'
import RESTClientService from 'services/axios-service-application'

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
  const { getListSuggest, queryKey } = useService()

  const { data } = useQuery({
    queryKey: [queryKey, searchInput],
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
