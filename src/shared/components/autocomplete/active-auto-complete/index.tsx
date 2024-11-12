import AutoCompleteBase, { IAutoCompleteBaseProps } from '../auto-complete-base'

const ActiveAutoComplete = (props: IAutoCompleteBaseProps) => {

    return (
        <AutoCompleteBase options={options_bank} {...props} />
    )
}

export default ActiveAutoComplete

export const RECEIVE_DATA = {
    RECEIVED: 'received',
    NOT_RECEIVED: 'not_received'
}
const options_bank = [
    { "value": RECEIVE_DATA.RECEIVED, "label": "Received" },
    { "value": RECEIVE_DATA.NOT_RECEIVED, "label": "Not Received" },
]
