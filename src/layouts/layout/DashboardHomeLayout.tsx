import LayoutHeader from 'layouts/layout-parts/LayoutHeader'
import { Outlet } from 'react-router-dom'
import { Box } from 'shared/styles'
import styled from 'styled-components'


const DashboardWrapper = styled(Box)`
    background-color: white;
    width: 100%;
    overflow: hidden;
`

interface DashboardHomeLayoutProps {}
const DashboardHomeLayout = ({}: DashboardHomeLayoutProps) => {
  return (
    <DashboardWrapper>
        <LayoutHeader />
        <Outlet />
        {/* <Box>footer</Box> */}
    </DashboardWrapper>
  )
}

export default DashboardHomeLayout