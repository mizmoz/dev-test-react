
import styled from 'styled-components';
import { style } from '../../configs/theme';

export default styled.input`
  padding: ${style('paddingSmall')};
  width: ${props => props.theme.width.input};
  height: ${props => props.theme.height.input};
`;
