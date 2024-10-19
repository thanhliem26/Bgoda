import { FC, Fragment } from 'react'
import { AppRoutes } from 'routers/routers'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'
import { theme } from 'shared/theme'

const App: FC = () => {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <AppRoutes />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </ThemeProvider>
    </Fragment>
  )
}

export default App
