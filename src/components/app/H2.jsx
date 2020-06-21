import styled from 'styled-components';

export default styled.h2`
  font-size: ${props => props.theme.fontSize.h2};
  font-family: ${props => props.theme.headerFontFamily};
  font-weight: ${props => props.theme.headerFontWeight};
  line-height: ${props => props.theme.fontSize.h1};
  color: ${props => props.theme.color.headerFont};
  margin-bottom: ${props => props.theme.marginHalf};
`;
