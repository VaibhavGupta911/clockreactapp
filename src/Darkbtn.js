import { MoonIcon } from "@chakra-ui/icons";
import { Box, VStack } from "@chakra-ui/react";
import React from "react";

export default function Darkbtn(props) {
    return (<div className='moon-div'>
        <VStack >
            <MoonIcon
                onClick={props.toggleColorMode}
                boxSize={8}
            />
            <Box textTransform='capitalize' >{props.colorMode} Mode</Box>
        </VStack>
    </div>
    );
}