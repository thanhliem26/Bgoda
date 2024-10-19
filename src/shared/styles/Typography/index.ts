import styled from 'styled-components';
import Box from '../Box'

const StyledBox = styled(Box)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const H1 = styled.h1`
    ${StyledBox};
  font-size: 28;
  font-weight: 600;

`;

export const H2 = styled.h2`
 ${StyledBox};
  font-size: 24;
  font-weight: 600;
`;


export const H3 = styled.h3`
 ${StyledBox};
  font-size: 18;
  font-weight: 600;
`;

export const H4 = styled.h4`
 ${StyledBox};
  font-size: 16;
  font-weight: 600;
`;


export const H5 = styled.h5`
 ${StyledBox};
  font-size: 15;
  font-weight: 600;
`;


export const H6 = styled.h6`
 ${StyledBox};
  font-size: 13;
  font-weight: 600;
`;

export const Paragraph = styled.p`
 ${StyledBox};
  font-size: 14;
  font-weight: 500;
`;

export const Small = styled.small`
 ${StyledBox};
  font-size: 13;
  font-weight: 500;
  line-height: 1.6rem;
`;

export const Span = styled.span`
 ${StyledBox};
  font-size: 14;
`;

export const Tiny = styled.p`
 ${StyledBox};
  font-size: 13;
  font-weight: 500;
  white-space: break-spaces;
`;