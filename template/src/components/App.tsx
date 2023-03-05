import React, { FC } from 'react';
import * as C from '@chakra-ui/react';
import { Logo } from './Logo';
// import { ThemeSwitch } from './ThemeSwitch';

const App: FC = () => {
  return (
    <C.Stack height='100%' width='100%' alignItems='center' spacing={0}>
      <C.Stack
        width='100%'
        alignItems='center'
        spacing={0}
        backgroundColor='navbar'
      >
        <C.Stack
          width={{ base: '100%', lg: '62rem' }}
          paddingX={{ base: '0.5rem', md: '1rem', lg: 0 }}
          paddingY='0.5rem'
          spacing={0}
          justifyContent='space-between'
          direction='row'
          alignItems='center'
        >
          <Logo width='2.5rem' />
          {/* <ThemeSwitch /> */}
        </C.Stack>
      </C.Stack>
      <C.Stack
        height='100%'
        width={{ base: '100%', lg: '62rem' }}
        paddingX={{ base: '0.5rem', md: '1rem', lg: 0 }}
        paddingY='0.8rem'
        spacing='0.5rem'
      >
        <C.Heading size='md' color='heading'>
          cra-template-gf
        </C.Heading>
        <C.Text>Create React App, GF's custom template by</C.Text>
      </C.Stack>
    </C.Stack>
  );
};

export default App;
