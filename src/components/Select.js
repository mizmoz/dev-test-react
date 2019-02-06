import styled from 'styled-components';
import chevronDown from '~/assets/chevron-down.svg';

export const Select = styled.select`
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	border: 1px solid #ddd;
	padding: 10px 20px;
	background: #fff url(${chevronDown}) 96% / 3% no-repeat;
	max-width: 100%;
`;

export const SelectItem = styled.option``;
