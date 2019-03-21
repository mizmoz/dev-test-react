
import styled from 'styled-components';
import { style } from '../../configs/theme';

export default styled.ul`
  list-style-type: none;
  display: block;
  position: relative;
  height:  ${props => (props.listCount * 40 + "px")};
  margin: 15px 0;
  @media screen and (min-width: 600px) {
    max-width: 50%;
    padding: 0 15px;
    margin: 0;
    width: 50%;
  }: 
`;
