
import styled from 'styled-components';
import { style } from '../../configs/theme';

export default styled.select`
  padding: ${style('paddingSmall')};
  width: ${props => props.theme.width.select};
  height: ${props => props.theme.height.select};
`;
