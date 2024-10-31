import { FC, ReactNode, useState } from 'react'
import { Outlet } from 'react-router-dom'
import DashboardSidebar from './DashboardSidebar'
import styled, { CSSProperties } from 'styled-components'
import { FlexBox } from 'shared/styles'
import LayoutBodyWrapper from 'layouts/layout-parts/LayoutBodyWrapper'

type DashboardLayoutProps = {
  children?: ReactNode
}

const BoxWrapperContainer = styled(FlexBox)`
    height: 100%;
    width: 100%;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.background};
`


const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  const [sidebarCompact, setSidebarCompact] = useState(false)

  const customStyle: CSSProperties = {
    width: `calc(100% - ${sidebarCompact ? '86px' : '280px'})`,
    marginLeft: sidebarCompact ? '86px' : '280px',
  }

  return (
      <BoxWrapperContainer>
        <DashboardSidebar />
        <LayoutBodyWrapper style={customStyle}>{children || <Outlet />}</LayoutBodyWrapper>
      </BoxWrapperContainer>

  )
}

export default DashboardLayout
