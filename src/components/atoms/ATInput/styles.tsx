import styled from 'styled-components/native';
import { Config } from '../../../configs';
import type { ATInputProps } from './interfaces';

const Input = styled.TextInput<ATInputProps>`
  background-color: ${(props) => props.background ?? 'transparant'};
  border-radius: ${(props) =>
    props.rounded
      ? typeof props.rounded === 'string'
        ? Config.RoundedSize[props.rounded]
        : props.rounded
      : 0}px;
  padding: ${(props) =>
    props.padding
      ? typeof props.padding === 'string'
        ? props.padding
        : props.padding + `px`
      : 0 + `px`};
  ${(props) => (props.flex ? `flex: ${props.flex}` : undefined)};
`;

export { Input };
