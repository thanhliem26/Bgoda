import React, { Fragment, useContext } from 'react'
import { TYPE_PERMISSION } from '../constants'
import AuthAdminContext from '..'
import DoNotAllowPage from 'pages/403'

interface ICant {
  children: React.ReactNode
  module: TYPE_PERMISSION
}
const Cant = ({children, module}: ICant) => {
  const { permission} = useContext(AuthAdminContext);
  const hasPermission =permission && permission.includes(module);
  if(!hasPermission && permission) return <DoNotAllowPage />;
  
  return (
    <Fragment>
      {children}
    </Fragment>
  )
}

export default Cant