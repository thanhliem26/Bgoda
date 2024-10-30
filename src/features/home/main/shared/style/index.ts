import { Box, FlexBox } from "shared/styles";
import styled from "styled-components";

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