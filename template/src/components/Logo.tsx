import { FC } from 'react';
import * as C from '@chakra-ui/react';
import logo from '../assets/logo.svg';

type LogoProps = {
  width: string;
};

export const Logo: FC<LogoProps & C.StackProps> = ({ width, ...rest }) => {
  const filter = C.useColorModeValue(
    'none',
    'invert(100%) sepia(0%) saturate(2826%) hue-rotate(27deg) brightness(113%) contrast(92%)'
  );

  return (
    <C.Stack width={width} filter={filter} {...rest}>
      <img src={logo} alt='logo' />
    </C.Stack>
  );
};
