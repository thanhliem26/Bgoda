import { FC, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Box, FlexBox } from 'shared/styles'
import { H1, Paragraph } from 'shared/styles/Typography'
import { ThemeContext } from 'styled-components'

const ErrorPage: FC = () => {
  const theme = useContext(ThemeContext)

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
          alt="Error 404"
        />
      </Box>
      <H1 style={{ fontSize: 64, fontWeight: 700, marginTop: 24, color: theme?.colors.primary }}>
        Ooops... 404!
      </H1>
      <Paragraph style={{ fontWeight: 500, color: theme?.colors?.disabled }}>
        The page you requested could not be found.
      </Paragraph>

      <NavLink
        to="/"
        style={{
          display: 'block',
          marginTop: '1.5rem',
          fontWeight: 600,
          textDecoration: 'underline',
          color: theme?.colors.primary
        }}
      >
        Back to Dashboard
      </NavLink>
    </FlexBox>
  )
}

export default ErrorPage
