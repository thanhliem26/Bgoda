import React, { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import 'assets/styles/reset.css'
import 'dayjs/locale/en'
import { ConfigProvider } from 'antd'
import App from './App.tsx'
import 'nprogress/nprogress.css'
import 'simplebar-react/dist/simplebar.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { AuthenticationProvider } from 'contexts/Authentication/index.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import LoadingSpinner from 'pages/LoadingSpiner.tsx'

let ReactQueryDevtoolsProduction = null
if (process.env.NODE_ENV !== 'production') {
  ReactQueryDevtoolsProduction = React.lazy(() =>
    import('@tanstack/react-query-devtools/build/modern/production.js').then(
      (d) => ({
        default: d.ReactQueryDevtools,
      })
    )
  )
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const root = createRoot(document.getElementById('root')! as HTMLElement)

root.render(
  <React.StrictMode>
    <ConfigProvider direction="ltr" locale={{ locale: 'en' }}>
      <AuthenticationProvider>
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={<LoadingSpinner />}>
            <App />
            {ReactQueryDevtoolsProduction && (
              <ReactQueryDevtoolsProduction
                initialIsOpen={false}
                buttonPosition="bottom-right"
              />
            )}
          </Suspense>
        </QueryClientProvider>
      </AuthenticationProvider>
    </ConfigProvider>
  </React.StrictMode>
)
