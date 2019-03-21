
import styled from 'styled-components';
import { style } from '../../configs/theme';

export default styled.div`
  background-color: ${style('color.background')};
  padding: ${style('paddingSmall')};
  border: ${style('border.component')};
  @media screen and (min-width: 600px) {
    max-width: 50%;
    width: 50%;
    padding: 0 15px;
    margin: 0;
  }: 
`;


