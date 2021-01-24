
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { injectGlobal, ThemeProvider } from 'styled-components';

import defaultTheme from '../../configs/theme';

/**
 * Wrapper for the ThemeProvider from styled-components
 */
export default class Theme extends PureComponent {
  /**
   * Add the global styles when we first launch
   */
  componentWillMount() {
    const { theme } = this.props;

    injectGlobal`
      @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400|Oswald:300,400');
      
      html,
      body {
        background-color: ${theme.color.background};
        font-size: ${theme.baseFontSize};
        margin: 0;
        height: 100%;
      }
      
      body {
        padding: 0;
      }

      #app {
        height: 100%;
      }
      
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      
      .material-icons {
        font-family: 'Material Icons';
        font-weight: normal;
        font-style: normal;
        font-size: 24px;  /* Preferred icon size */
        display: inline-block;
        line-height: 1;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: normal;
        white-space: nowrap;
        direction: ltr;
      
        /* Support for all WebKit browsers. */
        -webkit-font-smoothing: antialiased;
        /* Support for Safari and Chrome. */
        text-rendering: optimizeLegibility;
      
        /* Support for Firefox. */
        -moz-osx-font-smoothing: grayscale;
      
        /* Support for IE. */
        font-feature-settings: 'liga';
      }
    `;
  }

  /**
   * Render the Theme helper
   *
   */
  render = () => {
    const { children, theme } = this.props;
    return (
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    );
  };
}

Theme.propTypes = {
  children: PropTypes.node.isRequired,

  /**
   * Theme config
   */
  theme: PropTypes.object,
};

Theme.defaultProps = {
  theme: defaultTheme,
};
