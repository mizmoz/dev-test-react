
import styled from 'styled-components';
import { style } from '../../configs/theme';

export default styled.span`
  padding: 0;
  display: block;
  font-family: ${style('baseFontFamily')};
  font-weight: ${style('baseFontWeight')};
  color: ${style('color.primary')};
  margin: 10px 0;
`;


