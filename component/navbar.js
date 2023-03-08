import { Container } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { Flex, Spacer,Box } from "@chakra-ui/react";
export default function navbar() {
    return (
        <>
            <Container p={{base:"0px"}} maxW={{ base: "100%" } } >
                <Flex bg="" p="0"  boxShadow="base">
                    <Box p="4" bg="" >
                        <Link href={"/"} >CodeGPT</Link>
                    </Box>
                    <Box p="4" >
                        <Link href={"/translate"} >Translate</Link>
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
