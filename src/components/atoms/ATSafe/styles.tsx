import styled from 'styled-components/native';
import type ATSafeProps from './interfaces';

const Safe = styled.SafeAreaView<ATSafeProps>`
  ${(props) => (props.flex ? `flex: ${props.flex}` : undefined)};
`;

export { Safe };
