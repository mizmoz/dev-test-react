
import styled from 'styled-components';
import { style } from '../../configs/theme';

export default styled.input`
  display: block;
  background-color: ${style('color.tertiaryAlt')};
  border: ${style('border.component')};
  height: 35px;
  margin: 0 0 5px 0;
  padding: 0 5px;
`;
