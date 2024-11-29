import { useSearchParams } from 'react-router-dom'
import useActiveEmail from './hooks/useActiveEmail';
import { useEffect, useState } from 'react';
import { WrapperVerify } from '../verify-email/shared/style';
import { Box } from 'shared/styles';
import { H1 } from 'shared/styles/Typography';

const AuthorEmail = () => {
    const [searchParams] = useSearchParams();
    const [active, setActive] = useState(false)
    const token = searchParams.get('token') ?? '';

    const { onSubmit } = useActiveEmail({
        token: token,
        onSuccess: () => {
            setActive(true)
        },
        onError: () => {
            setActive(false)
        }
    })

    useEffect(() => {
        onSubmit()
    }, [token])

    return (
        <WrapperVerify>
        <Box className="verify__email-container">
          <Box className="verify__block">
            <Box className="verify__block-title">
              <H1>Active Email {active ? "Success" : "Failed"}</H1>
            </Box>
            <Box className="verify__block-btn">
              <a href={active ? '/login' : '/'}>Go back</a>
            </Box>
          </Box>
        </Box>
      </WrapperVerify>
    )
}

export default AuthorEmail