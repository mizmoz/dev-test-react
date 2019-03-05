import { createGlobalStyle } from 'styled-components/macro';
import { normalize } from 'polished';

import { color } from 'styles/color';

// Reset browser defaults and set default styles

export const GlobalStyle = createGlobalStyle`
  ${normalize()};

  * {
    box-sizing: border-box;
  }

  html,
  body {
    background: ${color.background};
    color: ${color.baseFont};
    font-family: 'Source Sans Pro', sans-serif,
    font-size: 16px;
    line-height: 1.4;
    -webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4 {
    margin: 0;
    color: ${color.headerFont};
    font-family: 'Oswald', sans-serif;
    font-weight: 300;
  }

  h1 {
    font-size: 4.25rem;
    line-height: 1.2;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1.375rem;
  }

  p {
    margin: 0 0 1rem;
  }
`;
