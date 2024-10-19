import { ReactNode, CSSProperties } from 'react'
import SimpleBar, { Props } from 'simplebar-react'
import styled from 'styled-components'

const StyledScrollBar = styled(SimpleBar)`
    max-height: 100%;
    & .simplebar-scrollbar::before {
      background-color: #8CA3BA;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    & .simplebar-scrollbar.simplebar-visible::before {
      opacity: 1;
    }

    &:hover .simplebar-scrollbar::before {
      opacity: 0.6; 
    }

    & .simplebar-track.simplebar-vertical {
      width: 9px;
    }

    & .simplebar-track.simplebar-horizontal .simplebar-scrollbar {
      height: 7px;
    }

    & .simplebar-scrollbar::before {
      height: 100%;
    }

    & .simplebar-mask {
      z-index: inherit;
    }
`;


// props type
type ScrollbarProps = {
    children: ReactNode
    style?: CSSProperties
    onBottom?: () => void
}

const Scrollbar = ({
    children,
    style,
    onBottom,
    ...props
}: ScrollbarProps & Props) => {
    function scrollHandler(event: React.UIEvent<HTMLDivElement, UIEvent>) {
        const { scrollHeight, scrollTop, clientHeight } =
            event.target as HTMLDivElement
        const isBottomReached =
            Math.abs(scrollHeight - (scrollTop + clientHeight)) <= 1
        if (isBottomReached) {
            onBottom?.()
        }
    }
    return (
        <StyledScrollBar
            style={style}
            {...props}
            onScrollCapture={scrollHandler}
        >
            {children}
        </StyledScrollBar>
    )
}

export default Scrollbar
