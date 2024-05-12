import styled from 'styled-components/native';
import { Config } from '../../../configs';
import type ATTextProps from './interfaces';

const TextType = {
  title: {
    fontSize: Config.TextSize.lg,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: Config.TextSize.md,
    fontWeight: 'bold',
  },
  body: {
    fontSize: Config.TextSize.sm,
    fontWeight: 'normal',
  },
  small: {
    fontSize: Config.TextSize.xs,
    fontWeight: 'normal',
  },
};

const Text = styled.Text<ATTextProps>`
  font-weight: ${(props) =>
    props.weight
      ? props.weight
      : props.type
        ? TextType[props.type].fontWeight
        : 'normal'};
  color: ${(props) => props.color ?? '#000000'};
  font-size: ${(props) =>
    props.size
      ? typeof props.size === 'string'
        ? Config.TextSize[props.size]
        : props.size
      : props.type
        ? TextType[props.type].fontSize
        : Config.TextSize.sm}px;
`;

export { Text };
