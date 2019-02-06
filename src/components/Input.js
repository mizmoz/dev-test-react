import styled from 'styled-components';

export const Input = styled.input`
	border: 1px solid #ddd;
	background-color: #fff;
	border-radius: 3px;
	padding: 10px 20px;

	&[type='number'] {
		appearance: textfield;

		&::-webkit-inner-spin-button,
		&::-webkit-outer-spin-button {
			-webkit-appearance: none;
		}
	}
`;
