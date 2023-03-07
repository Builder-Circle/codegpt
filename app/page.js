"use client";

import { Link} from "@chakra-ui/next-js";

import { Flex, Button, Box,Text } from "@chakra-ui/react";

export default function Home() {
    
    return (
        <Flex
            height={"80vh"}
            width={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            gap={"2rem"}
        >
            <Box p="4" bg="" fontSize={"6xl"}>
                <Text color=""> CodeGPT </Text>
            </Box>
            <Box p="4" bg="" fontSize={"2xl"}>
                <Text color=""> CodeGPT is a tool that can generate code for you. </Text>
            </Box>
            <Box p="4" bg="" >
                <Link href={"/translate"} >
                  <Button colorScheme="teal" size="lg" >
                      Try it for free
                  </Button>
                </Link>
            </Box>
        </Flex>
    );
}
