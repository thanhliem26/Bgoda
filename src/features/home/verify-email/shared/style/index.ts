import { Box } from "shared/styles";
import styled from "styled-components";

export const WrapperVerify = styled(Box)`
 width: 100%;
  background-color: #e9ecef;
  width: 100% !important;
  height: 100% !important;
  padding: 0 !important;
  margin: 0 !important;

  .verify__email-container {
      min-width: 100vh;
      min-height: 100vh;
      display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 100px;

      .verify__image {
        margin-bottom: 30px;

        img {

        }
      }

      .verify__block {
        width: 600px;
        max-width: 100%;
        border-top: 3px solid #d4dadf;
        background-color: white;
        padding: 36px 24px;

        .verify__block-title {
          h1 {
            margin: 0;
            font-size: 32px;
    font-weight: 700;
    letter-spacing: -1px;
    line-height: 48px;
          }

          p {
            font-size: 16px;
            margin: 20px 0 30px;
          }
        }

        .verify__block-btn {
          display: flex;
          justify-content: center;

          a {
            display: inline-block;
            padding: 16px 36px;
            font-size: 16px;
            color: #ffffff;
            text-decoration: none;
            border-radius: 6px;
            background-color: #1a82e2;
            border: none;
            outline: none;
            cursor: pointer;
          }
        }
      }
    }
`