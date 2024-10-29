import useDetailRoomService from 'features/admin/service-room/hooks/useDetailRoomService'
import AppButton from 'shared/components/AppButton'
import ModalBase, { ModalFooter } from 'shared/components/modal'
import { Box, FlexBox } from 'shared/styles'
import { Span, Tiny } from 'shared/styles/Typography'
import styled from 'styled-components'

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

interface IDetailRoomServiceModal {
  open: boolean
  setOpen: (value: boolean) => void
  id: string
}

function DetailRoomServiceModal({ open, setOpen, id }: IDetailRoomServiceModal) {
  const { roomService } = useDetailRoomService({
    id: id
  })
console.log("roomService", roomService)
  return (
    <ModalBase title="Detail room service" open={open} setOpen={setOpen}>
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
            <SpanField>Name</SpanField>
            <Box>
              <TinyValue>{roomService?.name}</TinyValue>
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
            <SpanField>Description</SpanField>
            <Box>
              <TinyValue>{roomService?.description}</TinyValue>
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

export default DetailRoomServiceModal
