import { Box } from 'shared/styles'
import styled from 'styled-components'

export const ContainerWrapper = styled(Box)`
  width: 100%;
  background-color: #f9f9f9;
  margin-bottom: 0;
  min-height: 660px;
`

export const FormWrapper = styled(Box)`
  width: 1100px;
  padding: 0;
  margin: 0 auto;
`

export const FormContainer = styled(Box)`
  width: 500px;
  line-height: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 40px;
  padding-bottom: 80px;

  & .form_container {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 6px 2px;
    background-color: rgb(255, 255, 255);
    padding: 16px 24px 24px;
    position: relative;
    opacity: 1;
    transition: opacity 500ms;
    border-radius: 4px;

    & .form_title {
      margin-top: 16px;
      margin-bottom: 16px;
      & h3 {
        font-weight: 500;
        font-size: 24px;
        margin: 8px 0px;
        line-height: 30px;
      }

      & h5 {
        font-size: 16px;
        line-height: 22px;
        font-weight: 400;
        margin: 8px 0px;
      }
    }

    & .form_link {
      justify-content: space-between;
      margin: 25px 0 10px;

      & .form_link_item {
        & a {
          background-color: transparent;
          text-decoration: none;
          font-size: 14px;
          line-height: 20px;
          font-weight: 400;
          color: rgb(83, 146, 249);
        }
      }
    }
  }
`
