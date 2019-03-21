
const ratio = 1.5;
const rem = `${ratio}rem`;

/**
 * Wrapper to save writing ${props => props.theme.name} in styled components all them time.
 *
 * Usage: style('width.max', '1200px');
 *
 * @param name
 * @param defaultValue
 */
export const style = (name, defaultValue = '') => props => name.split('.').reduce(
  (theme, key) => (typeof theme[key] !== 'undefined' ? theme[key] : defaultValue),
  props.theme,
);

/**
 * Theme styles for the app
 */
export default {
  baseFontSize: '16px',

  baseFontFamily: 'Arial, Helvetica, sans-serif',
  baseFontWeight: 400,
  headerFontFamily: '\'Oswald\', sans-serif',
  headerFontWeight: 300,

  radius: '0.2rem',

  marginTiny: `${ratio / 4}rem`,
  marginSmall: `${ratio / 3}rem`,
  marginHalf: `${ratio / 2}rem`,
  margin: rem,
  marginDouble: `${ratio * 2}rem`,

  paddingTiny: `${ratio / 4}rem`,
  paddingSmall: `${ratio / 3}rem`,
  paddingHalf: `${ratio / 2}rem`,
  padding: rem,
  paddingDouble: `${ratio * 2}rem`,

  border: {
    component: '1px solid #2B3A42',
    componentThick: '1px solid #EFF1F2',
  },

  color: {
    /**
     * Style Colours
     */
    background: '#F0F0DF',
    baseFont: '#333333',
    headerFont: '#FF9000',
    anchor: '#F46357',
    error: '#DE231C',

    // default component color, this is used for nav, panels, reports etc
    component: '#F0F0DF',
    componentAlt: '#f7f7f7',

    primary: '#2B3A42',
    primaryAlt: '#FF9000',
    secondary: '#3F5866',
    secondaryAlt: '#BDD3DE',
    tertiary: '#BEC3C7',
    tertiaryAlt: '#FFFFFF',
    quaternary: '#F46357',
    quaternaryAlt: '#FFFFFF',
  },

  fontSize: {
    h1: '4.25rem',
    h2: '1.5rem',
    h3: '1.2rem',
    h4: '1.1rem',
    normal: '1rem',
    small: '0.75rem'
  },

  shadow: {
    small: 'rgba(0, 0, 0, .11765) 0 1px 6px, rgba(0, 0, 0, .11765) 0 1px 4px',
    large: 'rgba(0,0,0,.10) 0 1px 6px 1px',
  },

  width: {
    min: '320px',
    max: '1200px',
  },
};
