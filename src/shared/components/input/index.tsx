import { Input, InputProps } from 'antd'
import styled from 'styled-components'

const InputComponent = styled(Input)`
    font-weight: 500;
    border-radius: 4px;
    color: rgb(11, 14, 30);
    background-color: rgb(255, 255, 255);


  &::placeholder {
    color: #888; 
    opacity: 1; 
  }
  
    &:hover {
        border: 1px solid rgb(186, 191, 197);
        box-shadow: none;
    }

    & svg {
        color: rgb(186, 191, 197);;
    }
    
`

const InputBase = (props: InputProps) => {
    return (
        <InputComponent size="large" {...props} />
    )
}

export default InputBase