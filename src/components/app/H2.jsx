
import styled from 'styled-components';
import { style } from 'configs/theme';

export default styled.h2`
  font-size: ${style('fontSize.h2')};
  font-family: ${style('headerFontFamily')};
  font-weight: ${style('headerFontWeight')};
  line-height: ${style('fontSize.h2')};
  color: ${style('color.headerFont')};
  margin-bottom: ${style('margin')}
`;
