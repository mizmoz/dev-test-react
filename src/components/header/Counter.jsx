
import styled from 'styled-components';
import { style } from '../../configs/theme';

export default styled.span`
  font-family: "Lucida Console", Monaco, monospace;
  display: inline-block;
  padding: 3px;
  border: 1px solid #F0F0DF;
  margin: 0 2px;
  position: relative;
  color: ${style('color.component')};
  line-height: ${style('fontSize.normal')};

  &:last-child { 
    transform: translateY(64%);
    &:before {
      content: '1';
      position absolute;
      bottom: 27px;
      left: -1px;
      padding: 1px 3px;
      display: inline-block;
      border: 1px solid #F0F0DF;
    }
   }
`;
