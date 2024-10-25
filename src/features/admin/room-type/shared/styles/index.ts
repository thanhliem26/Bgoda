import { Box } from 'shared/styles'
import styled from 'styled-components'

export const WrapperAvatar = styled(Box)`
  margin-bottom: 70px;
  width: 100%;
  position: relative;

  & .image_wrapper {
    overflow: hidden;
    height: 160px;
    border-radius: 10px;

    & .image_background {
        width: 100%;
    height: 100%;
    cursor: pointer;
    display: block;
    }
  }

  & .avatar_upload {
    position: absolute;
    width: 120px;
    height: 120px;
    left: 50%;
    transform: translate(-50%);
    border-radius: 50%;
    overflow: hidden;
    bottom: -20%;
    border: 5px solid #fff;
  }
`
