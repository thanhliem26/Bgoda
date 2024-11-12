import { TYPE_ACCOUNT_LOGIN } from 'contexts/Authentication'
import useAuth from 'features/authorization/hooks/useAuth'
import { FC, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Box, FlexBox } from 'shared/styles'
import { H1, Paragraph } from 'shared/styles/Typography'
import { ThemeContext } from 'styled-components'

const DoNotAllow: FC = () => {
  const theme = useContext(ThemeContext)
  const { type } = useAuth()
  const link = TYPE_ACCOUNT_LOGIN.TOURIST === type ? '/' : '/admin/room'

  return (
    <FlexBox
      style={{
        height: '100%',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 32,
        backgroundColor: theme?.colors.background,
        minHeight: '100vh',
      }}
    >
      <Box style={{ maxWidth: 350 }}>
        <img
          src="/static/illustration/error-page.svg"
          width="100%"
          alt="Error 403"
        />
      </Box>
      <H1
        style={{
          fontSize: 64,
          fontWeight: 700,
          marginTop: 24,
          color: theme?.colors.primary,
        }}
      >
        Ooops... 403!
      </H1>
      <Paragraph style={{ fontWeight: 500, color: theme?.colors?.disabled }}>
        You don't have permission to access this page.
      </Paragraph>

      <NavLink
        to={link}
        style={{
          display: 'block',
          marginTop: '1.5rem',
          fontWeight: 600,
          textDecoration: 'underline',
          color: theme?.colors.primary,
        }}
      >
        Back to Dashboard
      </NavLink>
    </FlexBox>
  )
}

export default DoNotAllow
