import { Box, FlexBox } from 'shared/styles'
import styled, { keyframes } from 'styled-components'

export const FormBodyWrapper = styled(FlexBox)`
  flex-direction: column;
  gap: 16px;
  width: 100%;
`

export const BoxImage = styled(Box)`
  width: 100%;
  padding: 10px;
  border-radius: 16px;
  overflow: hidden;

  & img {
    width: 100%;
  }
`

export const BoxWrapper = styled(FlexBox)`
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
`

export const BoxTitle = styled(FlexBox)`
  flex-direction: column;
  align-items: center;
  gap: 1px;

  & p {
    font-size: 16px;
    font-weight: 600;
    color: #252c38;
  }

  & span {
    font-size: 12px;
    font-weight: 400;
    color: #252c38;
  }
`

export const SlickButtonCarousel = styled.span`
  font-size: 24px !important;
  color: #252c38 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  width: 40px !important;
  height: 40px !important;
  background-color: rgba(0, 0, 0, 0.3) !important;
  border-radius: 50% !important;
  position: absolute !important;
  top: 50% !important;
  transform: translateY(-50%) !important;
  z-index: 1 !important;
  cursor: pointer !important;
  opacity: 1 !important;
  background-color: transparent !important;

  &::after {
    color: transparent;
  }

  &.slick-next {
    right: -40px;
  }

  &.slick-prev {
    left: -40px;
  }

  &.slick-disabled {
    display: none !important;
  }
`

export const fadein = keyframes`
    0% {
     opacity: 0;
    }
    100% {
     opacity: 1;
    }
  `

export const SectionBackground = styled.section`
  width: 100%;
  height: calc(100vh - 60px);
  position: relative;
  margin-bottom: 24px;

  & .background-image-wrapper {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-style: none;
      vertical-align: middle;
      border: 0;
    }
  }

  & .background_overlay {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }

  & .background_filter {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    /* color: white; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;

    & .background-title {
      flex-direction: column;

      h1 {
        margin: 5px 0;
        color: #fff;
        text-align: center;
        margin: 0;
      }

      h2 {
        font-size: 1em;
        color: #fff;
        text-align: center;
        font-weight: 500;
      }
    }

    & .background-action-filter {
      gap: 10px;
      background-color: rgba(255, 255, 255, 0.8);
      padding: 13px;
      border-radius: 6px;
    }
  }
`

export const SearchField = styled(Box)`
  position: relative;

  & .anticon-search {
    position: absolute;
    z-index: 2;
    top: 50%;
    transform: translateY(-50%);
    left: 10px;
    font-size: 20px;
    color: grey;
  }

  & .ant-input {
    padding: 0 40px;
  }
`

export const BoxWrapperMain = styled(Box)`
  box-shadow: none;
  font-size: 16px;
  height: 66px;
  padding: 0 10px;
  cursor: pointer;
  width: 100%;
  background: white;
  border: 1px solid #dddfe2;
  border-radius: 8px;
`

export const HotelWrapper = styled(FlexBox)`
  width: 950px;
  position: relative;
  top: -40px;

  & .item_menu {
    margin-bottom: 0px;
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 64px;
    padding-right: 64px;
    width: auto;
    left: auto;
    z-index: 1;
    -webkit-box-pack: center;
    justify-content: center;
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 6px 2px;
    border-radius: 8px;
    background-color: rgb(255, 255, 255);
    width: 100%;
  }
`

export const ListRoomWrapper = styled(FlexBox)`
  flex-direction: column;

  & .room-title {
    h2 {
      font-weight: 700;
      margin-bottom: 30px;
    }
  }

  & .room-list {
    & .room-star {
      width: 20%;
      margin-right: 16px;
      height: fit-content;

      & .room-checkbox {
        & .ant-checkbox-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
      }
    }

    & .room-city {
      width: 80%;
      flex-direction: column;
      gap: 20px;

      & .room-item {
        display: flex;
        border: 1px solid #d7d7db;
        border-radius: 4px;
        width: 100%;
        padding: 16px;
        gap: 10px;
        cursor: pointer;

        & .room__item-image {
          width: 30%;
          max-width: 284px;
          flex-direction: column;
          gap: 10px;
        }

        & .room__item-description {
          flex: 1;
          flex-direction: column;
          gap: 10px;

          & .room_description {
            flex-direction: column;
            p {
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }
      }
    }
  }
`
