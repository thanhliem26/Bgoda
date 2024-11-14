import AutoCompleteBase, { IAutoCompleteBaseProps } from '../auto-complete-base'

const ApproveAutoComplete = (props: IAutoCompleteBaseProps) => {

    return (
        <AutoCompleteBase options={options_bank} {...props} />
    )
}

export default ApproveAutoComplete

export const APPROVE_DATA = {
    APPROVE: '0',
    UN_APPROVE: '1'
}
const options_bank = [
    { "value": APPROVE_DATA.APPROVE, "label": "Approve" },
    { "value": APPROVE_DATA.UN_APPROVE, "label": "Un approve" },
]
