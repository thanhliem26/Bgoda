import { Badge, Button } from "antd"
import { FC, Fragment, useRef } from "react"
import AppAvatar from "shared/components/AppAvatar"
import { Box } from "shared/styles"
import { Tiny } from "shared/styles/Typography"
import styled, { keyframes } from "styled-components"
import {
    LogoutOutlined,
} from '@ant-design/icons'

const pulseAnimation = keyframes`
    0% {
      transform: scale(0.8);
      opacity: 1;
    }
    100% {
      transform: scale(2.4);
      opacity: 0;
    }
  `

// styled components
const StyledButtonBase = styled(Button)`
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    outline: 0px;
    margin: 0px;
    user-select: none;
    vertical-align: middle;
    appearance: none;
    text-decoration: none;
    color: inherit;
    font-family: Montserrat, sans-serif;
    border: 1px solid rgb(227, 230, 235);
    padding: 6px 8px;
    background-color: rgb(255, 255, 255);
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
    width: 250px;
    cursor: default;
    height: 41px;

    &:hover {
        background-color: rgba(11, 14, 30, 0.04) !important;
        border: 1px solid rgb(227, 230, 235) !important;
    }
  `

const BadgeAvatar = styled(Badge)`
    display: inline-flex;
    vertical-align: middle;
    flex-shrink: 0;
    position: absolute;
    align-items: center;
    height: 8px;
    bottom: 2px;
    right: 2px;
    box-shadow: rgb(255, 255, 255) 0px 0px 0px ;

    & .ant-badge-status-dot::after {
        position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 50%;
    border: 1px solid white;
    content: "";
    width: 100%;
    height: 100%;
    animation: 1.2s ease-in-out 0s infinite normal none running ${pulseAnimation};
    }
`;

const ProfilePopover: FC = () => {
    const anchorRef = useRef(null)
    // const { user } = useAuthorization()
    // const { logout } = useAuth()
    // const upSm = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'))

    // const handleLogout = () => {
    //     //   logout()
    //     //   toast.success('You Logout Successfully')
    // }

    return (
        <Fragment>
            <StyledButtonBase
                ref={anchorRef}
            >
                <Box style={{ position: 'relative', width: "fit-content" }}>
                    <AppAvatar
                        src={'/static/avatar/001-man.svg'}
                        style={{ width: 28, height: 28 }}
                    />
                    <BadgeAvatar color={"green"} style={{ zIndex: 9999 }} />

                </Box>

                <Box style={{ display: 'flex', maxWidth: '166px', color: "rgb(77, 96, 122)" }}>
                    <Tiny style={{ lineHeight: '15.85px' }}>
                        Hi,
                    </Tiny>

                    <Tiny

                        style={{
                            fontWeight: 600,
                            display: 'inline',
                            lineHeight: '15.85px',
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        David Pham
                    </Tiny>
                </Box>
                <LogoutOutlined style={{ color: "rgb(77, 96, 122)", fontSize: '16px', cursor: 'pointer' }} />
            </StyledButtonBase>

        </Fragment>
    )
}

export default ProfilePopover
