import AutoCompleteBase, { IAutoCompleteBaseProps } from '../auto-complete-base'

const DiscountTypeAutoComplete = (props: IAutoCompleteBaseProps) => {

    return (
        <AutoCompleteBase options={options_discount_type} {...props} />
    )
}

export default DiscountTypeAutoComplete

const options_discount_type =[
    { "value": 0, "label": "Fixed amount" },
    { "value": 1, "label": "Percentage" },
  ]

 export const labelDiscountType = (id: number) => {
    return options_discount_type.find((item) => item.value === id)
  }
  