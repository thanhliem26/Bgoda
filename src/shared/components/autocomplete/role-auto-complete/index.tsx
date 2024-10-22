import AutoCompleteBase, { IAutoCompleteBaseProps } from '../auto-complete-base'

const RoleAutoComplete = (props: IAutoCompleteBaseProps) => {
    const options = [{ label: <span>Tourist</span>, value: 'tourist' },
    { label: <span>System employee</span>, value: 'system_employee' },
    { label: <span>admin</span>, value: 'admin' }]

    return (
        <AutoCompleteBase options={options} {...props} />
    )
}

export default RoleAutoComplete