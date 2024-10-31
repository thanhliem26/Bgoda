import { H2 } from 'shared/styles/Typography'
import { Box, FlexBox, FormControl, HelperTextForm } from 'shared/styles'
import { Controller } from 'react-hook-form'
import InputBase from 'shared/components/input'
import AppButton from 'shared/components/AppButton'
import useLogin from 'features/home/login/hooks/useLogin'

function FormLogin() {
  const { onSubmit, control, isPending } = useLogin()

  return (
    <FlexBox
      style={{
        flexDirection: 'column',
        gap: '16px',
        padding: '0 50px',
        width: '50%',
      }}
    >
      <FlexBox>
        <H2 style={{ fontSize: '36px', fontWeight: 900 }}>Sign in</H2>
      </FlexBox>
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
                    <InputBase
                      placeholder="Email"
                      required
                      value={field.value}
                      onChange={field.onChange}
                    />
                    <HelperTextForm>{fieldState.error?.message}</HelperTextForm>
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
                    <InputBase
                      placeholder="Password"
                      required
                      value={field.value}
                      onChange={field.onChange}
                      type="password"
                    />
                    <HelperTextForm>{fieldState.error?.message}</HelperTextForm>
                  </FlexBox>
                )}
              />
            </FormControl>
          </FlexBox>
        </FlexBox>
        <FlexBox style={{ marginTop: '16px' }}>
          <AppButton
            onClick={onSubmit}
            loading={isPending}
            style={{ width: '100%' }}
          >
            Đăng nhập
          </AppButton>
        </FlexBox>
      </Box>
    </FlexBox>
  )
}

export default FormLogin
