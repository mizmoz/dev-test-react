import styled from 'styled-components';
import { style } from '../../configs/theme';

export const TableStyled = styled.table`
  font-family: ${style('baseFontFamily')};
  border-bottom: 1px solid #ddd;
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeadStyled = styled.th`
  padding: ${style('paddingSmall')};
  text-align: left;
  border-bottom: 1px solid #ddd;
  width: 100%;
`;

export const TableDataStyled = styled.td`
  padding: ${style('paddingSmall')};
  text-align: left;
  border-bottom: 1px solid #ddd;
  width: 100%;
`;

export const TableRowStyled = styled.tr`
  :hover {
    background-color: ${style('color.tertiary')};
  }
`;
