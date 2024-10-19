import { Avatar, AvatarProps } from 'antd'
import { FC } from 'react'
import styled from 'styled-components'

const StyledAvatar = styled(Avatar)`
  background-color: rgba(11, 14, 30, 0.04);
  border-color: rgb(255, 255, 255);
  border-width: 1px;
`

const AppAvatar: FC<AvatarProps> = (props) => {
  return <StyledAvatar {...props} />
}

export default AppAvatar
