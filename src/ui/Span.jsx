import styled from 'styled-components';
import { style } from '../configs/theme';

export default styled.span`
  font-size: ${props => props.theme.fontSize.normal};
  font-family: ${props => props.theme.headerFontFamily};
  font-weight: ${props => props.theme.headerFontWeight};
  line-height: ${props => props.theme.fontSize.normal};
  padding: ${style('paddingHalf')};
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;
