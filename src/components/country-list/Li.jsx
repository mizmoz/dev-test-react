
import styled from 'styled-components';
import { style } from '../../configs/theme';

export default styled.li`
  display: block;
  border: 1px solid ${style('color.primary')};
  background-color: ${style('color.primary')};
  color: ${style('color.background')};
  padding: 5px;
  margin: 5px 0;
  border-radius: 5px;
  height: 30px;
  font-size: 16px;
  line-height: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  text-transform: uppercase;
  transform: translateY(${props => (props.order * 40 + "px")});
  -webkit-transition: translate 2s; /* Safari */
  transition: transform 1s ease;
  position: absolute;
  top: 0;
  left: 0;
  @media screen and (min-width: 600px) {
    left: 15px;
  }: 
`;
