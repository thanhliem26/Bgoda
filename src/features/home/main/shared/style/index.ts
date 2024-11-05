import { Box, FlexBox } from "shared/styles";
import styled, { keyframes } from "styled-components";

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
  cursor: pointer;
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
    color: transparent
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
`;

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

  & .background-image-wrapper {
    width: 100%;
    height: 320px;
    position: absolute;
    left: 0px;
    right: 0px;

    &::before {
      background: url('static/background/bg-agoda-homepage.png') center center /
        cover no-repeat;
      position: absolute;
      width: 100%;
      height: 100%;
      content: '';
      border-bottom-left-radius: 48px;
    }
  }

  & .background-title {
    display: flex;
    justify-content: center;

    & .TileContainer__wrapper {
      max-width: 1124px;
      padding-top: 40px;

      & .WelcomeMessage {
        color: #fff;
        position: relative;
        margin-bottom: 16px;

        & h1 {
          animation: fadein 1s;
          font-size: 24px;
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 4px;
          margin-top: 0;
          overflow: hidden;
          text-transform: uppercase;
        }
      }
    }
  }

  & .background-filter {
    width: 100%;
    position: relative;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    margin-top: 20px;

    & .inner-background {
      animation: ${fadein} 0.3s;
      min-width: 580px;
      width: 100%;
      display: flex;
      justify-content: center;

      & .inner-background-modal {
        background-color: #f8f7f9;
        padding: 32px 48px 48px;
        width: 100%;
        position: relative;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px 3px;
        border-radius: 16px;
        max-width: 1124px;
        padding-top: 24px;
      }
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