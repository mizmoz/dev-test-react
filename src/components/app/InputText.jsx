
import styled from 'styled-components';
import { style } from 'configs/theme';

export default styled.input`
  font-size: ${style('fontSize.normal')};
  font-family: ${style('baseFontFamily')};
  font-weight: ${style('baseFontWeight')};
  line-height: ${style('fontSize.normal')};
  color: ${style('color.baseFont')};
  margin-left: ${style('marginSmall')};
  width: 100px;
  @media only screen and (min-width: ${style('breakpoints.xs')}) {
    width: auto;
  }
`;
