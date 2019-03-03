
import styled from 'styled-components';
import { style } from 'configs/theme';

export default styled.li`
  font-size: ${style('fontSize.normal')};
  font-family: ${style('baseFontFamily')};
  font-weight: ${style('baseFontWeight')};
  line-height: ${style('fontSize.normal')};
  color: ${style('color.baseFont')};
  margin-bottom: ${style('marginSmall')};
`;
