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
const ProvinceAutoComplete = (props: IAutoCompleteBaseProps) => {
    const { getAllProvince } = useService()
    const [data, setData] = useState<Province[]>([]);

    useEffect(() => {
        (async () => {
            const response: Province[] = await getAllProvince();
            setData(response)
        })()
    }, [])

    const options = useMemo(() => {
        return data.map((item) => ({
            label: item.full_name,
            value: item.id
        }))
    }, [data])

    return (
        <AutoCompleteBase options={options} {...props} />
    )
}

export default ProvinceAutoComplete