import useUpdatePassword from 'layouts/hooks/useUpdatePassword'
import { Controller } from 'react-hook-form'
import AppButton from 'shared/components/AppButton'
import AppTextField from 'shared/components/form/AppTextField'
import ModalBase, { ModalFooter } from 'shared/components/modal'
import { FlexBox, FormControl, HelperTextForm } from 'shared/styles'

interface IUpdatePasswordModal {
    open: boolean
    setOpen: (value: boolean) => void
}

function UpdatePasswordModal({ open, setOpen }: IUpdatePasswordModal) {
    const { onSubmit, control, isPending, isValid } = useUpdatePassword({
        onSuccess: () => {
            setOpen(false)
        },
    })

    return (
        <ModalBase title="Update password" open={open} setOpen={setOpen}>
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
                            name="oldPassword"
                            render={({ field, fieldState }) => (
                                <FlexBox style={{ flexDirection: 'column' }}>
                                    <AppTextField
                                        label="Old password"
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
                            name="newPassword"
                            render={({ field, fieldState }) => (
                                <FlexBox style={{ flexDirection: 'column' }}>
                                    <AppTextField
                                        label="New Password"
                                        required
                                        value={field.value}
                                        onChange={field.onChange}
                                        type='password'
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
                            name="reNewPassword"
                            render={({ field, fieldState }) => (
                                <FlexBox style={{ flexDirection: 'column' }}>
                                    <AppTextField
                                        label="Re new password"
                                        required
                                        value={field.value}
                                        onChange={field.onChange}
                                        type='password'
                                    />
                                    <HelperTextForm>{fieldState.error?.message}</HelperTextForm>
                                </FlexBox>
                            )}
                        />
                    </FormControl>
                </FlexBox>
            </FlexBox>
            <ModalFooter>
                <AppButton primary_shallow={true} onClick={() => setOpen(false)}>
                    Cancel
                </AppButton>
                <AppButton disabled={isValid} onClick={onSubmit} loading={isPending}>
                    Submit
                </AppButton>
            </ModalFooter>
        </ModalBase>
    )
}

export default UpdatePasswordModal
