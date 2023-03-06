import * as C from '@chakra-ui/react';

export const theme = C.extendTheme({
  fonts: {
    heading: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif`,
    body: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif`,
  },
  semanticTokens: {
    colors: {
      background: {
        default: 'white',
        _dark: 'stone',
      },
      navbar: {
        default: 'offwhite',
        _dark: 'jeans',
      },
      heading: {
        default: 'jeans',
        _dark: 'ash',
      },
      text: {
        default: 'stone',
        _dark: 'offwhite',
      },
    },
  },
  colors: {
    stone: '#232323',
    jeans: '#3f3f3f',
    ash: '#8b8b8b',
    white: '#ffffff',
    offwhite: '#f5f5f5',
    reactBlue: '#61DAFB',
  },
  styles: {
    global: (props: C.StyleFunctionProps) => ({
      body: {
        height: '100%',
        color: 'title',
        backgroundColor: 'background',
        transitionProperty: 'all',
        transitionDuration: 'normal',
      },
    }),
  },
  config: {
    initialColorMode: 'light',
  },
});

C.Heading.defaultProps = {
  color: 'heading',
  size: 'md',
  paddingTop: '1.5rem',
};

C.Spinner.defaultProps = {
  color: 'reactBlue',
  size: 'md',
  alignSelf: 'center',
};
