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
const CommuneAutoComplete = (props: IAutoCompleteBaseProps & {id_district: string}) => {
    const { id_district, ...inputProps} = props;
    
    const { getAllCommune } = useService()
    const [data, setData] = useState<Province[]>([]);

    useEffect(() => {
        (async () => {
            if(!id_district) {
                setData([]);
                return;
            }
            const response: Province[] = await getAllCommune({id_district});
            setData(response)
        })()
    }, [id_district])

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

export default CommuneAutoComplete