import AppButton from 'shared/components/AppButton'
import ModalBase, { ModalFooter } from 'shared/components/modal'
import { Box, FlexBox } from 'shared/styles'
import { Span, Tiny } from 'shared/styles/Typography'
import styled from 'styled-components'

interface IDetailUserModal {
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

function DetailUserModal({ open, setOpen }: IDetailUserModal) {


  return (
    <ModalBase title="Detail user" open={open} setOpen={setOpen}>
      <FlexBox style={{ flexDirection: 'column', gap: '16px' }}>
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
            <TinyValue>phamvanliem@gmail.com</TinyValue>
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
            <TinyValue>Thanhliem26</TinyValue>
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
          <SpanField>Date of birth</SpanField>
          <Box>
            <TinyValue>20/20/2002</TinyValue>
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
            <TinyValue>08337628772</TinyValue>
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
          <SpanField>Salary</SpanField>
          <Box>
            <TinyValue>5 cu</TinyValue>
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
          <SpanField>Bank number</SpanField>
          <Box>
            <TinyValue>08337628772</TinyValue>
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
            <TinyValue>Hai Minh - Hai Hau - Nam Dinh</TinyValue>
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
          <SpanField>Role</SpanField>
          <Box>
            <TinyValue>admin</TinyValue>
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

export default DetailUserModal
