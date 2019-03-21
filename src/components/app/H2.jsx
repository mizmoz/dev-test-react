
import styled from 'styled-components';
import { style } from '../../configs/theme';

export default styled.h1`
  font-size: ${style('fontSize.h2')};
  font-family: ${style('headerFontFamily')};
  font-weight: ${style('headerFontWeight')};
  color: ${style('color.primary')};
  margin: 0 0 5px;
`;
