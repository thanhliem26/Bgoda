import { DeleteOutlined, EyeOutlined, PlusOutlined } from '@ant-design/icons'
import { Image, Tooltip } from 'antd'
import { useState } from 'react'
import AppUpload from 'shared/components/AppUpload'
import { Box } from 'shared/styles'
import styled from 'styled-components'

interface Props {
    url: string
    onDelete?: any
    disabled?: boolean
}

const ImageWrapper = styled(Box)`
  height: 250px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border-color: #d0c7c7;

  .ant-upload-list-item {
    display: none !important;
  }

  .btn__image {
    width: 90%;
    height: 35%;
    background-color: rgb(208 199 199 / 30%);
    border: none;
    border-radius: 10px;

    label {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        margin: 0 5px;
      }
    }
  }

  &:hover {
    .image__contain {
      .action__image {
        span {
          display: block;
        }
      }
    }
  }

  .image__contain {
    height: 90%;
    width: 90%;
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;

    .action__image {
      position: absolute;
      inset: 0;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      display: flex;
      color: white;
      justify-content: space-around;
      align-items: center;

      span {
        font-size: 20px;
        display: none;
      }
    }

    img {
      width: 100%;
      object-fit: cover;
    }
  }
`

const ImageComponent = ({ url, onDelete, disabled = false }: Props) => {
    const [isPreviewVisible, setPreviewVisible] = useState(false)

    return (
        <ImageWrapper>
            <Box className="image__contain">
                <img src={url} />
                {isPreviewVisible && (
                    <Image
                        width={200}
                        preview={{
                            visible: isPreviewVisible,
                            onVisibleChange: (visible) => setPreviewVisible(visible),
                        }}
                        src={url}
                    />
                )}
                {!disabled && (
                    <Box className="action__image">
                        <span onClick={() => setPreviewVisible(!isPreviewVisible)}>
                            <Tooltip title={'Preview image'}>
                                <EyeOutlined />
                            </Tooltip>
                        </span>

                        {onDelete && (
                            <span onClick={onDelete}>
                                <Tooltip title={'Delete image'}>
                                    <DeleteOutlined />
                                </Tooltip>
                            </span>
                        )}
                    </Box>
                )}
            </Box>
        </ImageWrapper>
    )
}

export default ImageComponent

export const ImageAdd = ({ onChange }: { onChange: (file: string) => void }) => {
    return <ImageWrapper className="item__image">
        <button className="btn__image" type="button">
            <AppUpload
                multiple={true}
                onChangeUpload={({ file }) => {
                    onChange(file[0])
                }}
            >
                <label style={{ cursor: 'pointer' }}>
                    <PlusOutlined /> Upload
                </label>
            </AppUpload>

        </button>
    </ImageWrapper>
}
