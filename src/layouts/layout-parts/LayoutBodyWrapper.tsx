import { CSSProperties, FC, Fragment, ReactNode } from 'react'
import { Box } from 'shared/styles'
import styled from 'styled-components'

// styled components
const Wrapper = styled(Box)`
  padding-left: 28px;
  padding-right: 28px;
  transition: all 0.3s;

  @media (max-width: 1200px) {
    width: 100%;
    margin-left: 0;
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const InnerWrapper = styled(Box)`
  @media (min-width: 992px) { // 'lg' breakpoint in Ant Design is 992px
    max-width: 100%;
    margin: auto;
  }
`;

// --------------------------------------------
type LayoutBodyWrapperProps = {
    style: CSSProperties
    children: ReactNode
}
// --------------------------------------------

const LayoutBodyWrapper: FC<LayoutBodyWrapperProps> = ({ children, style }) => {
    return (
        <Fragment>
            <Wrapper style={style}>
                <InnerWrapper>{children}</InnerWrapper>
            </Wrapper>
        </Fragment>
    )
}

export default LayoutBodyWrapper
