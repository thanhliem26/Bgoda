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
export const WrapperLoginPage = styled(Box)`
  width: 100%;
  padding: 100px 0;

  .login__page-wrapper {
    .container {
      width: 900px;
      background: #fff;
      margin: 0 auto;
      border-radius: 20px;

      .singUp__content {
        padding: 75px 0;
        display: flex;
        display: -webkit-flex;
        box-shadow:
          rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
          rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
        border-radius: 20px;

        .remove__border {
          .ant-form-item-control-input-content {
            .ant-input-affix-wrapper {
              border-radius: 0;
              border-top: none;
              border-right: none;
              border-left: none;
              border-color: #999;
              border-width: 1px;
              padding: 0;

              &.ant-input-affix-wrapper {
                box-shadow: none;
              }

              &:focus {
                box-shadow: none !important;
                border-color: black;
              }

              &::placeholder {
                color: black;
              }
            }

            input {
              border-radius: 0;
              border-top: none;
              border-right: none;
              border-left: none;
              border-color: #999;
              border-width: 1px;
              padding: 6px 15px;

              &:focus {
                box-shadow: none;
                border-color: black;

                &::placeholder {
                  color: black;
                }
              }
            }
          }
        }

        .btn__submit {
          margin-top: 40px;

          .ant-form-item-control {
            margin: 0;
          }

          button {
            width: 100%;
            display: inline-block;
            background: #6dabe4;
            color: #fff;
            border-bottom: none;
            padding: 15px 39px;
            border-radius: 5px;
            -moz-border-radius: 5px;
            -webkit-border-radius: 5px;
            -o-border-radius: 5px;
            -ms-border-radius: 5px;
            align-items: center;
            cursor: pointer;
            justify-content: center;
            display: flex;
            height: 40px;

            &:hover {
              background: #4292dc;
            }
          }
        }

        .singUp__content-form {
          overflow: hidden;
          width: 50%;
          margin-left: 75px;
          margin-right: 75px;
          padding-left: 34px;

          .form__title {
            margin-bottom: 33px;
            font-family: Poppins_bold;
            font-weight: 900;
          }
        }

        .singUp__content-image {
          overflow: hidden;
          width: 50%;
          margin: 0 55px;
          margin-top: 45px;

          figure {
            margin-bottom: 50px;
            text-align: center;
          }

          img {
            max-width: 100%;
          }

          a {
            font-size: 14px;
            color: #222;
            display: block;
            text-align: center;
            cursor: pointer;
          }
        }
      }

      .singIn__content {
        padding-top: 67px;
        display: flex;
        display: -webkit-flex;
        box-shadow:
          rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
          rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
        border-radius: 20px;

        .remove__border {
          .ant-form-item-control-input-content {
            .ant-input-affix-wrapper {
              border-radius: 0;
              border-top: none;
              border-right: none;
              border-left: none;
              border-color: #999;
              border-width: 1px;
              padding: 0;

              &.ant-input-affix-wrapper {
                box-shadow: none;
              }

              &:focus {
                box-shadow: none !important;
                border-color: black;
              }

              &::placeholder {
                color: black;
              }
            }

            input {
              border-radius: 0;
              border-top: none;
              border-right: none;
              border-left: none;
              border-color: #999;
              border-width: 1px;
              padding: 6px 15px;

              &:focus {
                box-shadow: none;
                border-color: black;

                &::placeholder {
                  color: black;
                }
              }
            }
          }
        }

        .btn__submit {
          margin-top: 40px;

          .ant-form-item-control {
            margin: 0;
          }

          button {
            width: 100%;
            display: inline-block;
            background: #6dabe4;
            color: #fff;
            border-bottom: none;
            padding: 15px 39px;
            border-radius: 5px;
            -moz-border-radius: 5px;
            -webkit-border-radius: 5px;
            -o-border-radius: 5px;
            -ms-border-radius: 5px;
            align-items: center;
            cursor: pointer;
            justify-content: center;
            display: flex;
            height: 40px;

            &:hover {
              background: #4292dc;
            }
          }
        }

        .singIn__content-form {
          overflow: hidden;
          width: 50%;
          margin-right: 90px;
          margin-left: 80px;

          .form__title {
            margin-bottom: 33px;
            font-family: Poppins_bold;
            font-weight: 900;
          }
        }

        .singIn__content-image {
          overflow: hidden;
          width: 50%;
          margin-right: 20px;
          margin-top: 10px;

          img {
            max-width: 100%;
          }

          figure {
            margin-bottom: 50px;
            text-align: center;
          }

          a {
            font-size: 14px;
            color: #222;
            display: block;
            text-align: center;
            cursor: pointer;
          }
        }
      }
    }
  }
`
