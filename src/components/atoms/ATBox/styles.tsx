import styled from 'styled-components/native';
import type ATBoxProps from './interfaces';

const Box = styled.View<ATBoxProps>`
  background-color: ${(props) => props.background ?? 'transparent'};
  flex-direction: ${(props) => props.direction ?? 'column'};
  flex: ${(props) => props.flex ?? 1};
  justify-content: ${(props) => props.justify ?? 'flex-start'};
  align-items: ${(props) => props.align ?? 'flex-start'};
`;

export { Box };
