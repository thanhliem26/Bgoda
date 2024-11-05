import { Box, FlexBox } from "shared/styles"
import styled from "styled-components"

export const Header = styled.header`
  width: 100%;
`

export const Section = styled.section`
  display: flex;
  padding: 16px 16px;
  background-color: rgb(255, 255, 255);
  color: rgb(42, 42, 46);
  -webkit-box-align: center;
  align-items: center;
  flex: 1 1 0px;
  border-bottom: 1px solid #ece3e3;
  justify-content: space-between;
`

export const LogoPage = styled(Box)`
  & img {
    width: 89px;
    height: 37px;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
  }
`

export const FeatureInfo = styled(FlexBox)`
  & .btn_auth {
    background-color: rgba(255, 255, 255, 0);
    border-radius: 999px;
    border-width: 0px;
    color: rgb(49, 112, 231);
    fill: rgb(49, 112, 231);
    outline-color: transparent;
    cursor: pointer;
    display: flex;
    overflow: hidden;
    user-select: none;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;
    height: 44px;
    transition:
      background-color,
      outline-color 0.2s ease-in-out,
      border-color 0.2s ease-in-out;
    padding: 12px 24px;
    -webkit-tap-highlight-color: transparent;

    &.btn_login {
      &:hover {
        color: rgb(49, 112, 231);
        border-color: rgb(49, 112, 231);
        background-color: #eff4fd;
      }
    }

    &.btn_register {
      border-color: rgb(193, 203, 224);
      border-width: 1px;
      border-style: solid;

      &:hover {
        color: rgb(49, 112, 231);
        border-color: rgb(49, 112, 231);
        background-color: #eff4fd;
      }
    }

    &.btn_cart {
        &:hover {
            color: rgb(49, 112, 231);
        border-color: rgb(49, 112, 231);
        background-color: #eff4fd;
        }
    }
  }
`

export const MenuFeature = styled(FlexBox)`
    flex: 1;
    margin: 0 20px;

    & .feature_item {
        display: inline-block;
    position: relative;
    padding-top: 20px;
    padding-bottom: 20px;
    margin: 0px !important;

        & a {
            color: rgb(42, 42, 46);
            text-decoration: none;
            font-weight: 500;

            &:hover {
                color: rgb(83, 146, 249);
            }

            & span {
                font-size: 14px;
    line-height: 17px;
    font-weight: unset;
    margin: 0px;
            }
        }
    }
`
export const BoxImageUser = styled(Box)`
  width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    /* border: 1px solid #bdbaba; */
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin-right: 50px;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
`