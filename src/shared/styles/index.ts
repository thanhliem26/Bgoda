import styled from 'styled-components'
import Box from './Box'

export { default as Box } from './Box'
export { default as FlexBox } from './FlexBox'

export const WrapperContainer = styled(Box)`
  border-radius: 8px;
  overflow: hidden;
  background: white;
`
export const FormControl = styled(Box)`
  display: inline-flex;
  flex-direction: column;
  position: relative;
  min-width: 0px;
  padding: 0px;
  margin: 0px;
  border: 0px;
  vertical-align: top;
  width: 100%;
`
export const HelperTextForm = styled.p`
     color: rgb(255, 49, 111);
     font-family: Montserrat, sans-serif;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.66;
    text-align: left;
    margin: 3px 14px 0px;
`