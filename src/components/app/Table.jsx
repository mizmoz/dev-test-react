import styled from 'styled-components';
import { style } from '../../configs/theme';

import Button from './Button';

const TableWrapper = styled.div`
  padding: 36px 16px;
`;

const ButtonAction = styled(Button)`
  height: auto;
  padding: 6px 12px;
  font-size: 14px;
`;

const Table = styled.table`
width: 100%;
border-collapse: collapse;
border: 1px solid #ccc;
font-family: ${style('baseFontFamily')};
font-size: ${style('fontSize.xs')};

th, td {
    text-align: left;
    border-collapse: collapse;
    border: 1px solid #ccc;
    padding: ${style('paddingHalf')}
}
`;

export {
    TableWrapper,
    ButtonAction,
    Table
};