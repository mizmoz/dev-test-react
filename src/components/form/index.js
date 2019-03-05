import styled from 'styled-components/macro';

import { color } from 'styles/color';
import { SPACING, getSpacing } from 'styles/dimensions';

// This would usually be split into different components
// with this index being a single entry point

export const Form = styled.form`
	position: sticky;
	top: 0;
	margin: 0 -1px;
	padding: ${getSpacing()} 1px;
	background: ${color.component};
`;

export const FieldGroup = styled.div`
  display: grid;
  grid-template-rows: min-content min-content min-content;
  grid-gap: ${getSpacing()};
  margin: 0;
  padding: 0;
  border: 0;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-rows: min-content;
    grid-template-columns 1fr 1fr min-content;
  }
`;

export const FormRow = styled.div`
	display: grid;
	grid-template-columns: min-content 1fr;
	grid-gap: ${getSpacing(SPACING.small)};
	align-items: center;
`;

export const Input = styled.input`
	width: 100%;
`;
