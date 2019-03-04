import styled from 'styled-components/macro';

import { color } from 'styles/color';
import { SPACING, getSpacing } from 'styles/dimensions';

export const Table = styled.table`
	width: 100%;
	border-collapse: collapse;
	text-align: center;
`;

export const TR = styled.tr`
	tbody &:hover {
		background: ${color.background};
	}
`;

export const TH = styled.th`
	padding: ${getSpacing(SPACING.small)};
`;

export const TD = styled.td`
	padding: ${getSpacing(SPACING.small)};
	border: 1px solid ${color.tertiary};

	button {
		margin-left: ${getSpacing()};
	}
`;
