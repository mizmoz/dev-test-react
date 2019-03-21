
import styled from 'styled-components';
import { style } from '../../configs/theme';

export default styled.select`
  width: 100%;
  background-color: ${style('color.tertiaryAlt')};
  border: ${style('border.component')};
  height: 35px;
  margin: 15px 0;
`;
