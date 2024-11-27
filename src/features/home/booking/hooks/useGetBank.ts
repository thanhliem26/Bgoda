import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { isRight, unwrapEither } from 'shared/utils/handleEither'
import useService from '../services'
import RESTClientService from 'services/axios-service-application'
import { BANK_BIN } from 'shared/constants'

interface IUseGetBankProps {
  id: string | number
}

interface BusinessPartnerBank {
  BankId: number
  BankNumber: string
  BusinessPartnerId: number
  OwnerName: string
  Status: number
  id: number
  bank_data: {
    Code: string
    Logo: string
    Name: string
    id: number
  }
}

type ParamQrCode = {
    accountNo: string
    accountName: string
    acqId: number
    addInfo: string
    amount: number
}

const getQRCode = (param: ParamQrCode) => {
  return new Promise((resolve) => {
    resolve(
      fetch(`https://api.vietqr.io/v2/generate`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify({
          accountNo: param.accountNo,
          accountName: param.accountName,
          acqId: param.acqId,
          addInfo: param.addInfo,
          amount: param.amount,
          template: 'compact2'
        }),
      }).then((response) => response.json())
    )
  }).then((res) => {
    //@ts-ignore
    return res?.data?.qrDataURL || ''
  })
}

const useGetBank = ({ id }: IUseGetBankProps) => {
  const { getBusinessPartnerBank } = useService()

  const { data } = useQuery({
    queryKey: ['discount-room', id],
    enabled: !!id,
    queryFn: async () =>
      RESTClientService.fetchREST(getBusinessPartnerBank(), {
        businessPartnerId: id,
      }),
  })

  const businessPartnerBank: BusinessPartnerBank = useMemo(() => {
    if (data && isRight(data)) {
      const { metadata } = unwrapEither(data)
      return metadata?.rows?.[0]
    }
    return []
  }, [data])

  const binBank = useMemo(() => {
    const code = businessPartnerBank?.bank_data?.Code
    const binCode = BANK_BIN.find((item) => item.label === code)

    return binCode?.bin
  }, [businessPartnerBank])

  const handleGetQRCode = async (name: string, room: string, amount: number) => {
    const params: ParamQrCode = {
        accountName: businessPartnerBank?.bank_data?.Name,
        accountNo: businessPartnerBank?.bank_data?.Code,
        acqId: Number(binBank),
        addInfo: `${name} chuyển tiền đặt phòng ${room}`,
        amount: amount,
    }

    return await getQRCode(params)
  }
 
  return {
    businessPartnerBank: businessPartnerBank,
    binBank: binBank,
    handleGetQRCode: handleGetQRCode
  }
}

export default useGetBank
