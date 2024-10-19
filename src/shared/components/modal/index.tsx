import { Modal, ModalProps } from 'antd'
import { FlexBox } from 'shared/styles'
import styled from 'styled-components'

const ModalComponent = styled(Modal)`
  & .ant-modal-content {
    padding: 0;
  }

  & .ant-modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-bottom: 1px solid rgb(227, 230, 235);

    & .ant-modal-title {
      font-size: 18px;
      font-weight: 600;
      color: rgb(0, 80, 138);
      line-height: 21.94px;
    }
  }

  & .ant-modal-body {
    padding: 16px;
  }

  & .ant-modal-footer {
    display: flex;
    justify-content: flex-end;
    gap: 16px;
    padding: 8px 32px 16px;
  }
`

export const ModalFooter = styled(FlexBox)`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin-top: 16px;
`

interface IModalBaseProps extends ModalProps {
  open: boolean
  setOpen: (open: boolean) => void
}

const ModalBase = ({ children, open, setOpen, ...props }: IModalBaseProps) => {
  return (
    <ModalComponent
      centered
      open={open}
      onOk={() => setOpen(false)}
      onCancel={() => setOpen(false)}
      width={960}
      destroyOnClose={true}
      cancelText="Cancel"
      okText="Submit"
      footer={null}
      {...props}
    >
      {children}
    </ModalComponent>
  )
}

export default ModalBase
