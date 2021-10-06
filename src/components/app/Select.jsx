
import styled from 'styled-components';
import { style } from 'configs/theme';

export default styled.select`
  font-size: ${style('fontSize.normal')};
  font-family: ${style('baseFontFamily')};
  font-weight: ${style('baseFontWeight')};
  line-height: ${style('fontSize.normal')};
  color: ${style('color.baseFont')};
  margin-bottom: ${style('margin')};
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: 260px;
  @media only screen and (min-width: ${style('breakpoints.xs')}) {
    width: auto;
  }
`;
