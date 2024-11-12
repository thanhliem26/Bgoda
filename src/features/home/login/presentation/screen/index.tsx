import { H3, H5, Span, Tiny } from 'shared/styles/Typography'
import {
  ContainerWrapper,
  FormContainer,
  FormWrapper,
} from '../../shared/style'
import { Box, FlexBox, FormControl, HelperTextForm } from 'shared/styles'
import { Controller } from 'react-hook-form'
import useLogin from '../../hooks/useLogin'
import InputBase from 'shared/components/input'
import AppButton from 'shared/components/AppButton'
import { Link } from 'react-router-dom'
import {
  UnlockOutlined
} from '@ant-design/icons';

function Login() {
  const { onSubmit, control, isPending } = useLogin();

  return (
    <ContainerWrapper>
      <FormWrapper>
        <FormContainer>
          <Box className="form_container">
            <Box className="form_title">
              <H3>Đăng nhập</H3>
              <Box>
                <H5>
                  Để đảm bảo an toàn, xin vui lòng đăng nhập để truy cập vào
                  thông tin
                </H5>
              </Box>
            </Box>
            <Box className="form_field">
              <FlexBox style={{ flexDirection: 'column', gap: '16px' }}>
                <FlexBox
                  style={{
                    justifyContent: 'center',
                    alignContent: 'center',
                    marginTop: 8,
                  }}
                >
                  <FormControl>
                    <Controller
                      control={control}
                      name="email"
                      render={({ field, fieldState }) => (
                        <FlexBox style={{ flexDirection: 'column' }}>
                          <Span
                            style={{ marginBottom: '8px', display: 'block' }}
                          >
                            Email
                          </Span>
                          <InputBase
                            placeholder="Email"
                            required
                            value={field.value}
                            onChange={field.onChange}

                          />
                          <HelperTextForm>
                            {fieldState.error?.message}
                          </HelperTextForm>
                        </FlexBox>
                      )}
                    />
                  </FormControl>
                </FlexBox>
                <FlexBox
                  style={{
                    justifyContent: 'center',
                    alignContent: 'center',
                    marginTop: 8,
                  }}
                >
                  <FormControl>
                    <Controller
                      control={control}
                      name="password"
                      render={({ field, fieldState }) => (
                        <FlexBox style={{ flexDirection: 'column' }}>
                          <Span
                            style={{ marginBottom: '8px', display: 'block' }}
                          >
                            Password
                          </Span>
                          <InputBase
                            placeholder="Password"
                            required
                            value={field.value}
                            onChange={field.onChange}
                            type="password"
                          />
                          <HelperTextForm>
                            {fieldState.error?.message}
                          </HelperTextForm>
                        </FlexBox>
                      )}
                    />
                  </FormControl>
                </FlexBox>
              </FlexBox>
              <FlexBox style={{ marginTop: '16px' }}>
                <AppButton onClick={onSubmit} loading={isPending} style={{ width: '100%' }}>
                  Đăng nhập
                </AppButton>
              </FlexBox>
              <FlexBox className='form_link'>
                <Box className='form_link_item'>
                  <Link to={'/register'}>Tạo tài khoản</Link>
                </Box>
                {/* <Box className='form_link_item'>
                  <Link to={'/'}> <UnlockOutlined /> Quên mật khẩu?</Link>
                </Box> */}

              </FlexBox>
              <FlexBox>
                <Tiny>
                  Khi đăng nhập, tôi đồng ý với các Điều khoản sử dụng và Chính sách bảo mật của Bgoda.
                </Tiny>
              </FlexBox>
            </Box>
          </Box>
        </FormContainer>
      </FormWrapper>
    </ContainerWrapper>
  )
}

export default Login
