import { useEffect, useMemo, useState } from 'react';
import AutoCompleteBase, { IAutoCompleteBaseProps } from '../auto-complete-base'
import useService from './services';

type Province = {
    full_name: string
    full_name_en: string
    id: string
    latitude: string
    longitude: string
    name: string
    name_en: string
}
const DistrictAutoComplete = (props: IAutoCompleteBaseProps & {id_province: string}) => {
    const { id_province, ...inputProps} = props;
    
    const { getAllDistrict } = useService()
    const [data, setData] = useState<Province[]>([]);

    useEffect(() => {
        (async () => {
            if(!id_province) {
                setData([]);
                return;
            }
            const response: Province[] = await getAllDistrict({id_province});
            setData(response)
        })()
    }, [id_province])

    const options = useMemo(() => {
        return data.map((item) => ({
            label: item.full_name,
            value: item.id
        }))
    }, [data])

    return (
        <AutoCompleteBase options={options} {...inputProps} />
    )
}

export default DistrictAutoComplete