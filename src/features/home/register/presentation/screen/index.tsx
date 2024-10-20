import { H3, H5, Span, Tiny } from 'shared/styles/Typography'
import {
  ContainerWrapper,
  FormContainer,
  FormWrapper,
} from '../../shared/style'
import { Box, FlexBox, FormControl, HelperTextForm } from 'shared/styles'
import { Controller } from 'react-hook-form'
import AppTextField from 'shared/components/form/AppTextField'
import useCreateUser from '../../hooks/useCreateUser'
import InputBase from 'shared/components/input'
import AppButton from 'shared/components/AppButton'
import { Link } from 'react-router-dom'
import {
  UnlockOutlined
} from '@ant-design/icons';

function Register() {
  const { onSubmit, control, isPending, isValid } = useCreateUser({
    onSuccess: () => {
      // setOpen(false)
    },
  })

  return (
    <ContainerWrapper>
      <FormWrapper>
        <FormContainer>
          <Box className="form_container">
            <Box className="form_title">
              <H3>Đăng kí</H3>
              {/* <Box>
                <H5>
                  Để đảm bảo an toàn, xin vui lòng đăng nhập để truy cập vào
                  thông tin
                </H5>
              </Box> */}
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
                      name="name"
                      render={({ field, fieldState }) => (
                        <FlexBox style={{ flexDirection: 'column' }}>
                          <Span
                            style={{ marginBottom: '8px', display: 'block' }}
                          >
                            Họ và tên
                          </Span>
                          <InputBase
                            placeholder="Họ và tên"
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
                            Mật khẩu
                          </Span>
                          <InputBase
                            placeholder="Mật khẩu"
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
                      name="re_password"
                      render={({ field, fieldState }) => (
                        <FlexBox style={{ flexDirection: 'column' }}>
                          <Span
                            style={{ marginBottom: '8px', display: 'block' }}
                          >
                            Xác nhận mật khẩu
                          </Span>
                          <InputBase
                            placeholder="Xác nhận mật khẩu"
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
              </FlexBox>
              <FlexBox style={{ marginTop: '16px' }}>
                <AppButton onClick={onSubmit} disabled={isValid} loading={isPending} style={{ width: '100%' }}>
                  Đăng kí
                </AppButton>
              </FlexBox>
              <FlexBox className='form_link'>
                <Box className='form_link_item'>
                  <Link to={'/login'}>Bạn đã có tài khoản?</Link>
                </Box>
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

export default Register
