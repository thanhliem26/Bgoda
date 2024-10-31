import AutoCompleteBase, { IAutoCompleteBaseProps } from '../auto-complete-base'

const GenderAutoComplete = (props: IAutoCompleteBaseProps) => {

    return (
        <AutoCompleteBase options={option_gender} {...props} />
    )
}

export default GenderAutoComplete

export const option_gender =[
    { "value": "1", "label": "Male" },
    { "value": "2", "label": "Female" },
    { "value": "3", "label": "Other" },
  ]
  