import { FC, lazy, LazyExoticComponent, Suspense } from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import LoadingScreen from 'shared/components/loading-screen'
//misc page
import DoNotAllow from 'pages/403'
import NotFound from 'pages/404'
import DashboardLayout from 'layouts/layout/DashboardLayout'
import DashboardHomeLayout from 'layouts/layout/DashboardHomeLayout'
import ProtectedLayout from 'features/authorization/presentation/page-sections/ProtectedLayout'
import AuthenticateLayout from 'features/authorization/presentation/page-sections/AuthenticateLayout'
import Cant from 'contexts/AuthenticationAdmin/components/Cant'
import AuthenticateLayoutAdmin from 'features/authorization/presentation/page-sections/AuthenticateLayouAdmin'

const Loadable = (Component: LazyExoticComponent<FC>) => (props: any) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  )
}

const AdminUserPage = Loadable(lazy(() => import('../pages/admin/user')))

const RoleTemplatePage = Loadable(
  lazy(() => import('../pages/admin/role-template'))
)

const RoomTypePage = Loadable(lazy(() => import('../pages/admin/room-type')))

const ServiceRoomPage = Loadable(
  lazy(() => import('../pages/admin/service-room'))
)

const BusinessPartnerPage = Loadable(
  lazy(() => import('../pages/admin/business-partner'))
)

const BusinessPartnerBankPage = Loadable(
  lazy(() => import('../pages/admin/business-partner-bank'))
)

const SystemEmployeePage = Loadable(
  lazy(() => import('../pages/admin/system-employee'))
)

const RoomAdminPage = Loadable(lazy(() => import('../pages/admin/room')))

const DiscountAdminPage = Loadable(lazy(() => import('../pages/admin/discount')))

const BookingAdminPage = Loadable(lazy(() => import('../pages/admin/booking')))

const MainPage = Loadable(lazy(() => import('../pages/home/main/index')))

const RoomProvincePage = Loadable(lazy(() => import('../pages/home/room-province/index')))

const RoomSearchPage = Loadable(lazy(() => import('../pages/home/room-search/index')))

const BookingPage = Loadable(lazy(() => import('../pages/home/booking/index')))

const RoomPage = Loadable(lazy(() => import('../pages/home/room/index')))

const DiscountPage = Loadable(lazy(() => import('../pages/home/discount/index')))

const LoginPage = Loadable(lazy(() => import('../pages/home/login/index')))

const VerifyEmailPage = Loadable(lazy(() => import('../pages/home/verify-email/index')))

const SystemLoginPage = Loadable(lazy(() => import('../pages/admin/system-login/index')))

const RegisterPage = Loadable(
  lazy(() => import('../pages/home/register/index'))
)

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <DashboardHomeLayout>
        <Outlet />
      </DashboardHomeLayout>
    ),
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: '/city/:id',
        element: <RoomProvincePage />,
      },
      {
        path: '/discount/:id',
        element: <DiscountPage />,
      },
      {
        path: '/room-search',
        element: <RoomSearchPage />,
      },
      {
        path: '/room/booking/:id',
        element: <BookingPage />,
      },
      {
        path: '/city/room/:id',
        element: <RoomPage />,
      },
      {
        path: '/login',
        element: (
          <AuthenticateLayout>
            <LoginPage />
          </AuthenticateLayout>
        ),
      },
      {
        path: '/register',
        element: (
          <AuthenticateLayout>
            <RegisterPage />
          </AuthenticateLayout>
        ),
      },
    ],
  },
  {
    path: '/admin',
    element: (
      <ProtectedLayout>
        <Outlet />
      </ProtectedLayout>
    ),
    children: [
      {
        index: true,
        element: <Cant module='account_manage'>
          <DashboardLayout>
            <AdminUserPage />
          </DashboardLayout>

        </Cant>,
      },
      {
        path: 'booking',
        element: <Cant module='booking_manage'>
          <DashboardLayout>
            <BookingAdminPage />
          </DashboardLayout>

        </Cant>,
      },
      {
        path: 'discount',
        element: <Cant module='discount_manage'>
          <DashboardLayout>
            <DiscountAdminPage />
          </DashboardLayout>

        </Cant>,
      },
      {
        path: 'bank-business-partner',
        element: <Cant module='bank_manage'>
          <DashboardLayout>
            <BusinessPartnerBankPage />
          </DashboardLayout>

        </Cant>,
      },
      {
        path: 'role-template',
        element: <Cant module='role_manage'>
          <DashboardLayout>
            <RoleTemplatePage />
          </DashboardLayout>

        </Cant>,
      },
      {
        path: 'room-type',
        element: <Cant module='room_manage'>
          <DashboardLayout>
            <RoomTypePage />
          </DashboardLayout>

        </Cant>,
      },
      {
        path: 'service-room',
        element: <Cant module='service_manage'>
          <DashboardLayout>
            <ServiceRoomPage />
          </DashboardLayout>

        </Cant>,
      },
      {
        path: 'business-partner',
        element: <Cant module='account_manage'>
          <DashboardLayout>
            <BusinessPartnerPage />
          </DashboardLayout>

        </Cant>,
      },
      {
        path: 'system-employee',
        element: <Cant module='account_manage'>
          <DashboardLayout>
            <SystemEmployeePage />
          </DashboardLayout>

        </Cant>,
      },
      {
        path: 'room',
        element: (
          <Cant module="room_manage">
            <DashboardLayout>
              <RoomAdminPage />
            </DashboardLayout>
          </Cant>
        ),
      },
    ],
  },
  {
    path: '/system-login',
    element: <AuthenticateLayoutAdmin>
      <SystemLoginPage />
      </AuthenticateLayoutAdmin>,
  },
  {
    path: '/verify-email',
    element: <VerifyEmailPage />,
  },
  {
    path: '/forbidden',
    element: <DoNotAllow />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

export const AppRoutes = () => {
  return <RouterProvider router={router} />
}
