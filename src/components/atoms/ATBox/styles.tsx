import styled from 'styled-components/native';
import { Config } from '../../../configs';
import type ATBoxProps from './interfaces';

const Box = styled.View<ATBoxProps>`
  background-color: ${(props) => props.background ?? 'transparent'};
  flex-direction: ${(props) => props.direction ?? 'column'};
  ${(props) => (props.flex ? `flex: ${props.flex}` : undefined)};
  justify-content: ${(props) => props.justify ?? 'flex-start'};
  align-items: ${(props) => props.align ?? 'flex-start'};
  padding: ${(props) => {
    return props.padding
      ? typeof props.padding === 'string'
        ? Config.PaddingSize.hasOwnProperty(props.padding)
          ? // @ts-ignore
            Config.PaddingSize[props.padding] + `px`
          : props.padding
        : props.padding + `px`
      : 0 + `px`;
  }};
  border-radius: ${(props) =>
    props.rounded
      ? typeof props.rounded === 'string'
        ? // @ts-ignore
          Config.RoundedSize[props.rounded]
        : props.rounded
      : 0}px;
`;

export { Box };
