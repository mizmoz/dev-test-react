
import styled from 'styled-components';
import { style } from 'configs/theme';

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media only screen and (min-width: ${style('breakpoints.xs')}) {
    padding-left: ${style('padding')};
  }
`;
