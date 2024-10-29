import useDetailBusinessPartner from 'features/admin/business-partner/hooks/useDetailBusinessPartner'
import { WrapperAvatar } from 'features/admin/business-partner/shared/styles'
import AppButton from 'shared/components/AppButton'
import ModalBase, { ModalFooter } from 'shared/components/modal'
import { Box, FlexBox } from 'shared/styles'
import { Span, Tiny } from 'shared/styles/Typography'
import styled from 'styled-components'

interface IDetailBusinessPartnerModal {
  open: boolean
  setOpen: (value: boolean) => void
  id: string
}

const SpanField = styled(Span)`
      font-size: 12px;
    font-weight: 500;
    line-height: 14.63px;
    white-space: break-spaces;
    color: rgb(77, 96, 122);
`

const TinyValue = styled(Tiny)`
  
  font-size: 13px;
    font-weight: 600;
    line-height: 15.85px;
    white-space: break-spaces;
    color: rgb(11, 14, 30);
`

function DetailBusinessPartnerModal({ open, setOpen, id }: IDetailBusinessPartnerModal) {
  const { businessPartner } = useDetailBusinessPartner({
    id: id
  })

  return (
    <ModalBase title="Detail business partner" open={open} setOpen={setOpen}>
      <FlexBox style={{ flexDirection: 'column', gap: '16px' }}>
        <FlexBox>
          <WrapperAvatar>
            <Box className="image_wrapper">
              <label htmlFor="image_background">
                <img
                  src={'/static/avatar/avatar_support.jpg'}
                  alt="avatar supporting"
                />
              </label>
            </Box>
            <Box className="avatar_upload">
              <label htmlFor="image">
                <img
                  width={'100%'}
                  src={
                    businessPartner?.logo
                      ? businessPartner?.logo
                      : '/static/avatar/001-man.svg'
                  }
                  alt="avatar"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',

                  }}
                />
              </label>
            </Box>
          </WrapperAvatar>
        </FlexBox>

        <FlexBox>
          <FlexBox
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              marginTop: 8,
              flexDirection: 'column',
              flex: 1
            }}
          >
            <SpanField>Email</SpanField>
            <Box>
              <TinyValue>{businessPartner?.email}</TinyValue>
            </Box>
          </FlexBox>

          <FlexBox
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              marginTop: 8,
              flexDirection: 'column',
              flex: 1
            }}
          >
            <SpanField>Name</SpanField>
            <Box>
              <TinyValue>{businessPartner?.name}</TinyValue>
            </Box>
          </FlexBox>

        </FlexBox>

        <FlexBox>
          <FlexBox
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              marginTop: 8,
              flexDirection: 'column',
              flex: 1
            }}
          >
            <SpanField>Address</SpanField>
            <Box>
              <TinyValue>{businessPartner?.address}</TinyValue>
            </Box>
          </FlexBox>

          <FlexBox
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              marginTop: 8,
              flexDirection: 'column',
              flex: 1
            }}
          >
            <SpanField>Phone number</SpanField>
            <Box>
              <TinyValue>{businessPartner?.phoneNumber}</TinyValue>
            </Box>
          </FlexBox>

        </FlexBox>

        <FlexBox>
          <FlexBox
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              marginTop: 8,
              flexDirection: 'column',
              flex: 1
            }}
          >
            <SpanField>Role template</SpanField>
            <Box>
              <TinyValue>{businessPartner?.roleName}</TinyValue>
            </Box>
          </FlexBox>

        </FlexBox>

      </FlexBox>
      <ModalFooter>
        <AppButton primary_shallow={true} onClick={() => setOpen(false)}>
          Cancel
        </AppButton>
      </ModalFooter>
    </ModalBase>
  )
}

export default DetailBusinessPartnerModal
