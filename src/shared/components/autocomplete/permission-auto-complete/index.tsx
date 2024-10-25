import AutoCompleteBase, { IAutoCompleteBaseProps } from '../auto-complete-base'
import useGetOptions from './hooks/useGetOptions';

const PermissionAutoComplete = (props: IAutoCompleteBaseProps) => {
    const { options } = useGetOptions();

    return (
        <AutoCompleteBase options={options} mode='tags' {...props} />
    )
}

export default PermissionAutoComplete

export const PermissionLabel = {
    account_manage: 'Quản lí tài khoản',
    booking_manage: 'Quản lí đặt phòng',
    role_manage: 'Quản lí quyền',
    discount_manage: 'Quản lí giảm giá',
    transaction_manage: 'Quản lí giao dịch',
    rating_manage: 'Phản hồi, đánh giá',
    room_manage: 'Quản lí phòng',
    service_manage: 'Quản lí dịch vụ',
    showroom_manage: 'Quản lí chi nhánh',
}

export type TypePermissionLabel = keyof typeof PermissionLabel;
