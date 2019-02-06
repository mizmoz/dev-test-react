import styled from 'styled-components';

// I tend not to use `${props => props.isDestructive && '#fff'}` etc
// within `Button` components because buttons can have such differing
// variations that the component becomes tricky to mentally
// compute. Separating variations into components clearly distinguishes
// the different types and makes code easier for developers to follow.
export const Button = styled.button`
	border: 0;
	margin-left: 15px;
	padding: 5px 10px;
	border-radius: 2px;
`;
