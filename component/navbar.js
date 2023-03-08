import { Container, color } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { Flex, Spacer,Box,Text } from "@chakra-ui/react";
import { usePathname } from 'next/navigation';

import { useState,useEffect } from "react";

export default function Navbar() {
    const pathname = usePathname();
    
    
    return (
        <>
            <Container p={{base:"0px"}} maxW={{ base: "100%" } } >
                <Flex bg="" p="0"  boxShadow="base">
                    <Box p="4" bg="" >
                        <Link href={"/"} >
                            <Text  _hover={{color:"#2c7a7b"}} color={pathname=='/' ? 'teal':'black'}  >CodeGPT</Text>
                        </Link>
                    </Box>
                    <Box p="4" >
                        <Link href={"/translate"} >
                            <Text _hover={{color:"#2c7a7b"}} color={pathname=='/translate' ? 'teal':'black'}>
                                Translate
                            </Text>
                        </Link>
                    </Box>
                    {/* <Box p="4">
                        <Link href={"/debug"} >debug</Link>
                    </Box> */}

                    <Spacer />
                    
                </Flex>
            </Container>
        </>
    );
}
