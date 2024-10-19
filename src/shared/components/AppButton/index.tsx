import { Button, ButtonProps } from 'antd'
import styled from 'styled-components'

const ButtonComponent = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  font-family: Montserrat, sans-serif;
  line-height: 1.75;
  text-transform: none;
  box-shadow: none;
  font-size: 12px;
  font-weight: 600;
  min-width: 84px;
  color: white;
  outline: 0px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  margin: 0px;
  text-decoration: none;
  transition:
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 4px;
  padding: 0.6rem 1.5rem;

  & span {
    font-size: 13px;
  }
`

interface AppButtonProps extends ButtonProps {
  primary_shallow?: boolean
}
const AppButton = ({
  children,
  primary_shallow = false,
  style,
  ...props
}: AppButtonProps) => {
  return (
    <ButtonComponent
      type="primary"
      size={'large'}
      style={primary_shallow ? {
        backgroundColor: 'rgb(241, 249, 255)',
        border: '1px solid rgb(136, 205, 255)',
        color: 'rgb(31, 132, 235)',
        ...style
      } : {...style}}
      {...props}
    >
      {children}
    </ButtonComponent>
  )
}

export default AppButton
