import AutoCompleteBase, { IAutoCompleteBaseProps } from '../auto-complete-base'
import useGetOptions from './hooks/useGetOptions';

const RoomAutoComplete = (props: IAutoCompleteBaseProps) => {
    const { options } = useGetOptions();

    return (
        <AutoCompleteBase options={options} mode='tags' {...props} />
    )
}

export default RoomAutoComplete