import { FlexBox } from 'shared/styles'
import styled from 'styled-components'

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

    &.feedback {
      border: none;
      padding: 0;
      gap: 16;

      & .feedback_progress {
        flex-direction: column;
        gap: 8;

        & .progress_title {
          width: 100px;
          color: '#1e1915';
          font-size: 16px;
          font-weight: 700;
        }

        & .line_progress {

        }
      }

      & .feedback_review {
        margin-top: 16px;

        & .feedback_review_item {
          gap: 16px;
          width: 100%;

          .box_image {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            overflow: hidden;

            & img {
              width: 100%;
            }
          }

          & .box_review {
            flex-direction: column;
            width: 100%;

            & .box_review_name {
              font-size: 12px;
              font-weight: 600;
            }

            & .box_review_rate {
              & .ant-rate-star  {
                font-size: 12px;
              }
            }

            & .box_review_date {
              color: #bbb;
            }

            & .box_description {
              margin-top: 10px;
    background-color: #f5f5f5;
    padding: 20px 10px;
            }
          }
        }
      }
    }

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
