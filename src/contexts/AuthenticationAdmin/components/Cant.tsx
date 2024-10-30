import React, { Fragment, useContext } from 'react'
import { TYPE_PERMISSION } from '../constants'
import AuthAdminContext from '..'
import ErrorPage from 'pages/404'

interface ICant {
  children: React.ReactNode
  module: TYPE_PERMISSION
}
const Cant = ({children, module}: ICant) => {
  const { permission} = useContext(AuthAdminContext);
  const hasPermission =permission && permission.includes(module);
  if(!hasPermission && permission) return <ErrorPage />;
  
  return (
    <Fragment>
      {children}
    </Fragment>
  )
}

export default Cant