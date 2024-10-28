import AutoCompleteBase, { IAutoCompleteBaseProps } from '../auto-complete-base'
import useGetOptions from './hooks/useGetOptions';

const BusinessPartnerAutoComplete = (props: IAutoCompleteBaseProps) => {
    const { options } = useGetOptions();

    return (
        <AutoCompleteBase options={options} {...props} />
    )
}

export default BusinessPartnerAutoComplete