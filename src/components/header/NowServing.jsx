
import styled from 'styled-components';
import { style } from '../../configs/theme';

export default styled.span`
  font-size: ${style('fontSize.normal')};
  display: inline-block;
  overflow: hidden;
  margin-left: 8px;
  line-height: ${style('fontSize.normal')};
`;
