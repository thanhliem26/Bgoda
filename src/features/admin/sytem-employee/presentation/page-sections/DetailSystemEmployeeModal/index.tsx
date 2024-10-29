import dayjs from 'dayjs'
import useDetailEmployee from 'features/admin/sytem-employee/hooks/useDetailEmployee'
import AppButton from 'shared/components/AppButton'
import ModalBase, { ModalFooter } from 'shared/components/modal'
import { Box, FlexBox } from 'shared/styles'
import { Span, Tiny } from 'shared/styles/Typography'
import { convertCurrency } from 'shared/utils/convert-string'
import styled from 'styled-components'

interface IDetailSystemEmployeeModal {
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

function DetailSystemEmployeeModal({ open, setOpen, id }: IDetailSystemEmployeeModal) {
  const { employee } = useDetailEmployee({
    id: id
  })

  console.log("employee", employee)

  return (
    <ModalBase title="Detail employee" open={open} setOpen={setOpen}>
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
            <TinyValue>{employee?.name}</TinyValue>
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
            <TinyValue>{employee?.name}</TinyValue>
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
            <TinyValue>{employee?.address}</TinyValue>
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
            <TinyValue>{employee?.phoneNumber}</TinyValue>
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
            <TinyValue>{employee?.salary ? `${convertCurrency(employee?.salary)} VND` : ''}</TinyValue>
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
            <TinyValue>{employee?.bankNumber}</TinyValue>
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
          <SpanField>Bank</SpanField>
          <Box>
            <TinyValue>{employee?.bank}</TinyValue>
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
          <SpanField>Date of birth</SpanField>
          <Box>
            <TinyValue>{dayjs(employee?.dob).format('DD-MM-YYYY')}</TinyValue>
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
          <SpanField>Role</SpanField>
          <Box>
            <TinyValue>{employee?.roleName}</TinyValue>
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

export default DetailSystemEmployeeModal
