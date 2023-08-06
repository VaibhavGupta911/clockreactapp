import './App.css';
import React from 'react';
import { ChakraProvider, useColorMode } from '@chakra-ui/react';
import Clock from './Clock';
import Darkbtn from './Darkbtn';

export default function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    < ChakraProvider>
      { /*<div className='moon-div'>
        <VStack >
          <MoonIcon
            onClick={toggleColorMode}
            boxSize={8}
          />
          <Box textTransform='capitalize' >{colorMode} Mode</Box>
        </VStack>
  </div>*/}
      <Darkbtn colorMode={colorMode} toggleColorMode={toggleColorMode} />
      <Clock colorMode={colorMode} />
    </ChakraProvider>
  );
}

