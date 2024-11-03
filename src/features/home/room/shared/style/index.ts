import { Box, FlexBox } from 'shared/styles'
import styled, { keyframes } from 'styled-components'

export const RoomInfoWrapper = styled(FlexBox)`
  width: 100%;
  margin-top: 20px;
  flex-direction: column;
  gap: 20px;
 

  & .room_background {
    border-radius: 30px;
    overflow: hidden;

    & .room_thumbnail {
    max-width: 41.6667%;
    flex-basis: 41.6667%;
    height: 303px;
    overflow: hidden;
    padding: 0 4px;
    position: relative;
    cursor: pointer;

    & .room-btn {
      position: absolute;
      bottom: 8px;
      z-index: 10;
      color: red;
      right: 15px;

      & .ant-btn {
        border-radius: 15px;
        padding: 10px;
      }
    }

    & .box-image {
      width: 100%;
      height: 100%;

      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px 0 0px 8px;
      }
    }
  }

  & .room_images {
    max-width: 58.3333%;
    flex-basis: 58.3333%;
  }
  }


`

export const BoxWrapper = styled(FlexBox)`
    border-radius: 4px;
    border-color: rgb(221, 223, 226);
    border-style: solid;
    border-width: 1px;
    padding: 16px;
    box-shadow: none;
    margin: 0px;
    flex-direction: column;

    &.room_description {
    
      h2 {
        font-weight: 600;
    font-size: clamp(20px, 18.359px + 0.512821vw, 24px);
    line-height: clamp(24px, 21.9487px + 0.641026vw, 29px);
      }
    }

    &.room_service {
      & .room_icon {
        & svg {
          font-size: 16px;
        }
      }
    }
`
