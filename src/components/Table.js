import styled, { css } from 'styled-components';

export const Table = styled.table`
	border-collapse: collapse;
`;

export const TableHead = styled.thead``;
export const TableBody = styled.tbody``;
export const TableRow = styled.tr`
	&:hover {
		background-color: #f8f8f8;
	}
`;

const commonCellStyles = css`
	border-bottom: 1px solid #ddd;
	text-align: ${props => (props.isRightAlign ? 'right' : 'left')};
`;

export const TableHeaderCell = styled.th`
	${commonCellStyles};
	padding: 12px;
	height: 60px;
	background-color: #f8f8f8;
`;

export const TableCell = styled.td`
	${commonCellStyles};
	padding: 8px;
	height: 45px;
	color: #444;
`;
