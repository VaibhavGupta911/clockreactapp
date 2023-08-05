import React from "react";
import { useEffect, useState } from "react";
import { Box, Heading, VStack } from "@chakra-ui/react";

export default function Clock(props) {
    const [data, setData] = useState(new Date().toLocaleTimeString());
    const [date, setDate] = useState(new Date());
    useEffect(
        () => {
            const intervalId = setInterval(() => {
                setData(new Date().toLocaleTimeString());
                setDate(new Date());
            }, 1000)

            return () => clearInterval(intervalId);
        },
        []
    )

    const datefun = new Date();
    console.log("date =", datefun);//this containes all data time day 
    console.log(new Date());

    return (
        <>
            <div className="centered-div">

                <Box
                    borderRadius='3xl' border='4px'
                    textAlign='center' padding='5%'
                    margin='5%'
                    textTransform='uppercase'
                    color={
                        () => {
                            if (props.colorMode === 'light') {
                                return '#3F2305'
                            } else {
                                return '#F5F5F5'
                            }
                        }
                    }

                >
                    <VStack>
                        <Heading as='h1' size='xl'>
                            {date.getDate()}:{date.getMonth()}:{date.getFullYear()}
                        </Heading>
                        <Heading className="heading1" as='h1' size='xl'>
                            {data}
                        </Heading>
                    </VStack>

                </Box>

            </div>
        </>




    )
}
