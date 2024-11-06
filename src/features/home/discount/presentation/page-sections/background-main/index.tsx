import { Box } from 'shared/styles'
import 'dayjs/locale/vi'
import {
    SectionBackground,
} from 'features/home/discount/shared/style'
import MainWrapperContext from 'features/home/discount/context'
import { useContext } from 'react'

const BackgroundMain = () => {
    const { discountInfo } = useContext(MainWrapperContext)
   
    return (
        <SectionBackground>
            <Box className="background-image-wrapper">
                <img src={discountInfo?.image} />
            </Box>
        </SectionBackground>
    )
}

export default BackgroundMain
