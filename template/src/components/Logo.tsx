import { FC } from 'react';
import * as C from '@chakra-ui/react';
import logo from '../assets/logo.svg';

type LogoProps = {
  width: string;
};

export const Logo: FC<LogoProps & C.StackProps> = ({ width, ...rest }) => {
  return (
    <C.Stack width={width} {...rest}>
      <img src={logo} alt='logo' />
    </C.Stack>
  );
};
