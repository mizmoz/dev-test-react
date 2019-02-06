import styled, { keyframes } from 'styled-components';

const spin = keyframes`
	to {
		transform: rotate(360deg);
	}
`;

export const Loader = styled.span`
	margin: auto;
	overflow: hidden;
	text-indent: -999em;
	width: 80px;
	height: 80px;
	border-radius: 80px;
	border: 8px solid #eee;
	border-bottom-color: #aaa;
	animation: ${spin} 1s infinite linear;
`;
