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
import ProtectedLayout from 'features/authorization/presentation/page-sections/ProtectedLayout';
import AuthenticateLayout from 'features/authorization/presentation/page-sections/AuthenticateLayout';

const Loadable = (Component: LazyExoticComponent<FC>) => (props: any) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  )
}

const AdminUserPage = Loadable(lazy(() => import('../pages/admin/user')))

const RoleTemplatePage = Loadable(lazy(() => import('../pages/admin/role-template')))

const RoomTypePage = Loadable(lazy(() => import('../pages/admin/room-type')))

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
        element: <AuthenticateLayout>
          <LoginPage />
        </AuthenticateLayout>
      },
      {
        path: "/register",
        element: <AuthenticateLayout><RegisterPage /></AuthenticateLayout>
      },
    ]
  },
  {
    path: '/admin',
    element: (
      <ProtectedLayout>
        <DashboardLayout>
          <Outlet />
        </DashboardLayout>
      </ProtectedLayout>

    ),
    children: [
      {
        index: true,
        element: <AdminUserPage />,
      },
      {
        path: 'role-template',
        element: <RoleTemplatePage />
      },
      {
        path: 'room-type',
        element: <RoomTypePage />
      }
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
