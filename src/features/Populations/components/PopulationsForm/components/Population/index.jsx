
import styled from 'styled-components';
import { style } from 'configs/theme';

export default styled.span`
  text-align: right;
  @media only screen and (min-width: ${style('breakpoints.xs')}) {
    margin-right: ${style('margin')};
  }
`;
