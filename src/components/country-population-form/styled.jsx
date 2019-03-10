import styled from 'styled-components';
import { style } from '../../configs/theme';

export const FormStyled = styled.form`
  display: flex;
  margin: 35px 0 20px;
  justify-content: space-between;
  height: 40px;
`;

export const DropdownStyled = styled.select`
  height: 40px;
`;

export const InputStyled = styled.input`
  padding: ${style('paddingTiny')};
`;
