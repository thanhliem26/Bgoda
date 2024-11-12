import AutoCompleteBase, { IAutoCompleteBaseProps } from '../auto-complete-base'
import useGetOptions from './hooks/useGetOptions';

const DiscountRoomAutoComplete = (props: IAutoCompleteBaseProps & {id: string}) => {
    const { options } = useGetOptions({id: props.id});

    return (
        <AutoCompleteBase options={options} labelInValue={true}  optionLabelProp="displayLabel"{...props} />
    )
}

export default DiscountRoomAutoComplete