import { CSSProperties, ReactNode } from 'react'
import { Box, FlexBox } from 'shared/styles'
import { H5 } from 'shared/styles/Typography'
import styled from 'styled-components'

const TextHeading = styled(H5)`
  font-size: 18px;
  line-height: 21.94px;
  font-weight: 600;
  color: rgb(11, 14, 30);
`

const IconWrapper = styled(Box)`
  width: 40px;
  height: 40px;
  display: flex;
  border-radius: 4px;
  align-items: center;
  margin-right: 0.5rem;
  justify-content: center;
  background-color: rgb(241, 249, 255);

  & svg {
    color: rgb(36, 153, 239);
  }
`

interface Props {
  Icon: JSX.Element
  textLabel: string | ReactNode
  go_back?: boolean
  style?: CSSProperties
}

const IconScreen = ({
  Icon,
  textLabel,
  style = {},
}: Props) => {

  return (
    <FlexBox style={{ gap: 4, alignItems: 'center', ...style }}>
      <IconWrapper>{Icon}</IconWrapper>
      <FlexBox style={{ gap: 16, flexDirection: 'column' }}>
        <TextHeading>{textLabel}</TextHeading>
      </FlexBox>
    </FlexBox>
  )
}

export default IconScreen
