import './App.css';
import React from 'react';
import { ChakraProvider, useColorMode, Box, VStack } from '@chakra-ui/react';
import Clock from './Clock';
import { MoonIcon } from '@chakra-ui/icons';
export default function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    < ChakraProvider>
      <div className='moon-div'>
        <VStack >
          <MoonIcon
            onClick={toggleColorMode}
            boxSize={8}
          />
          <Box textTransform='capitalize' >{colorMode} Mode</Box>
        </VStack>
      </div>
      <Clock colorMode={colorMode} />
    </ChakraProvider>
  );
}

