import useDetailRoleTemplate from 'features/admin/role-template/hooks/useDetailRoleTemplate'
import AppButton from 'shared/components/AppButton'
import AppTag from 'shared/components/AppTag'
import { PermissionLabel, TypePermissionLabel } from 'shared/components/autocomplete/permission-auto-complete'
import ModalBase, { ModalFooter } from 'shared/components/modal'
import { Box, FlexBox } from 'shared/styles'
import { Span, Tiny } from 'shared/styles/Typography'
import styled from 'styled-components'

interface IDetailRoleTemplateModal {
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

function DetailRoleTemplateModal({ open, setOpen, id }: IDetailRoleTemplateModal) {
  const { roleTemplate } = useDetailRoleTemplate({
    id: id
  })

  return (
    <ModalBase title="Detail role template" open={open} setOpen={setOpen}>
      <FlexBox style={{ flexDirection: 'column', gap: '16px' }}>
        <FlexBox>
          <FlexBox
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              marginTop: 8,
              flexDirection: 'column',
              flex: 1,
              gap: '8px'
            }}
          >
            <SpanField>Name</SpanField>
            <Box>
              <TinyValue>{roleTemplate?.name}</TinyValue>
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
              flex: 1,
              gap: '8px'
            }}
          >
            <SpanField>Permission</SpanField>
            <FlexBox style={{ flexWrap: 'wrap', gap: '16px' }}>{roleTemplate?.permission.map((item, idx) => {
              return <AppTag key={idx}>{PermissionLabel?.[item as TypePermissionLabel]}</AppTag>
            })}</FlexBox>
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

export default DetailRoleTemplateModal
