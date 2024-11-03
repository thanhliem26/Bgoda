import { Col, Image, Row } from 'antd'
import { useMemo } from 'react'
import AppTabComponent, { ITabType } from 'shared/components/AppTabs'
import ModalBase from 'shared/components/modal'
import { ImageRoom } from 'shared/schema/room'
import { Box, FlexBox } from 'shared/styles'
import styled from 'styled-components'

interface IPreviewImageRoomModal {
    open: boolean
    setOpen: (value: boolean) => void
    images: ImageRoom[]
}

function PreviewImageRoomModal({ open, setOpen, images }: IPreviewImageRoomModal) {
    const tabImageItem: ITabType[] = useMemo(() => {
        const imageAll = images?.flatMap((item) => {
            return item.urls;
        })

        const typeImage = images?.map((item, key) => {
            return {
                key: key.toString(),
                label: item?.type,
                children: <ImageComponent key={key} urls={item?.urls} />
            }
        })

        return [
            {
                key: 'all',
                label: 'Tất cả',
                children: <ImageComponent key={'all'} urls={imageAll} />,
            },
            ...typeImage,
        ]
    }, [images])

    return (
        <ModalBase title={null} open={open} setOpen={setOpen} width={1200}>
            <FlexBox>
                <AppTabComponent items={tabImageItem} />
            </FlexBox>
        </ModalBase>
    )
}

export default PreviewImageRoomModal


type ImageComponentProps = {
    urls: string[]
}
const BoxImageWrapper = styled(Box)`
    width: 100%;
    height: 250px;
    overflow: hidden;

    & .ant-image {
        width: 100%;
        height: 100%;
    }
`
const ImageComponent = ({ urls }: ImageComponentProps) => {
    return (
        <Box>
            <Row gutter={[16, 16]}>
                {urls.map((item) => {
                    return <Col span={6} >
                       <BoxImageWrapper >
                       <Image
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: '10px'
                            }}
                            src={item}
                        />
                       </BoxImageWrapper>
                    </Col>
                })}

            </Row>
        </Box>
    )
}
