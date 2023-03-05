import * as React from 'react';
import * as C from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

type ThemeSwitchProps = Omit<C.IconButtonProps, 'aria-label'>;

export const ThemeSwitch: React.FC<ThemeSwitchProps> = (size, rest) => {
  const { toggleColorMode } = C.useColorMode();
  const text = C.useColorModeValue('dark', 'light');
  const SwitchIcon = C.useColorModeValue(MoonIcon, SunIcon);

  return (
    <C.IconButton
      rounded='full'
      size='md'
      fontSize='md'
      variant='ghost'
      marginLeft='2'
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      aria-label={`Switch to ${text} mode`}
      {...rest}
    />
  );
};
