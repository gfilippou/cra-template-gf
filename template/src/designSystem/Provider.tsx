import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { ColorModeScript } from '@chakra-ui/react';
import { theme } from './Theme';

export const DsProvider = ({ children }: { children: any }) => {
  return (
    <>
      <ColorModeScript />
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </>
  );
};
