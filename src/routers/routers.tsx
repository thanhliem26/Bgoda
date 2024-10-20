import { FC, lazy, LazyExoticComponent, Suspense } from 'react'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from 'react-router-dom'
import LoadingScreen from 'shared/components/loading-screen'
//misc page
import DoNotAllow from 'pages/403';
import NotFound from 'pages/404'
import DashboardLayout from 'layouts/layout/DashboardLayout';
import DashboardHomeLayout from 'layouts/layout/DashboardHomeLayout';

const Loadable = (Component: LazyExoticComponent<FC>) => (props: any) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  )
}

const AdminUserPage = Loadable(lazy(() => import('../pages/admin/user')))

const MainPage = Loadable(lazy(() => import('../pages/home/main/index')))

const LoginPage = Loadable(lazy(() => import('../pages/home/login/index')))

const RegisterPage = Loadable(lazy(() => import('../pages/home/register/index')))

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardHomeLayout><Outlet /></DashboardHomeLayout>,
    children: [
      {
        index: true,
        element: <MainPage />
      },
      {
       path: "/login",
        element: <LoginPage />
      },
      {
        path: "/register",
         element: <RegisterPage />
       },
    ]
  },
  {
    path: '/admin',
    element: (
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    ),
    children: [
      {
        index: true,
        element: <AdminUserPage />,
      },
    ],
  },
  {
    path: "/forbidden",
    element: <DoNotAllow />
  },
  {
    path: "*",
    element: <NotFound />
  }
])

export const AppRoutes = () => {
  return <RouterProvider router={router} />
}
