import React, { Fragment, useContext, useEffect } from 'react'
import AuthContext from 'contexts/Authentication'
import { useNavigate } from 'react-router-dom'

interface ICantApplication {
    children: React.ReactNode
}

const CantApplication = ({ children }: ICantApplication) => {
    const { authState } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (authState === 'IS_NOT_AUTHENTICATED') {
            navigate('/login')
        }
    }, [authState])

    return (
        <Fragment>
            {children}
        </Fragment>
    )
}

export default CantApplication