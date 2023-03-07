"use client";
import { Image } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
    Editable,
    EditableInput,
    EditableTextarea,
    EditablePreview,
} from "@chakra-ui/react";

import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";
import SelectLanguage from "@/component/selectLanguage";
export default function translate() {
    return (
        <>
            <Flex
                height={"90vh"}
                alignItems={"center"}
                justifyContent={"space-evenly"}
            >
                <Box
                    p={"1rem"}
                    boxShadow={"lg"}
                    borderRadius={"2xl"}
                    border={"1px"}
                    borderColor={"gray.100"}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"space-evenly"}
                    alignItems={"center"}
                >
                    <Box mb={"1rem"} >
                        <SelectLanguage />
                    </Box>
                    <Editable
                        defaultValue="Take some code here"
                        m={""}
                        minW={"400px"}
                        minH={"400px"}
                    >
                        <EditablePreview />
                        <EditableTextarea minW={"400px"} minH={"400px"} />
                    </Editable>
                </Box>
                <Box>
                    <Flex>
                        <Button colorScheme="teal" size="lg">
                            Convert
                        </Button>
                    </Flex>
                </Box>
                <Box
                    p={"1rem"}
                    boxShadow={"lg"}
                    borderRadius={"2xl"}
                    border={"1px"}
                    borderColor={"gray.100"}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"space-evenly"}
                    alignItems={"center"}
                >
                    <Box mb={"1rem"} >
                        <SelectLanguage />
                    </Box>
                    <Editable
                        defaultValue="Take some code here"
                        m={""}
                        minW={"400px"}
                        minH={"400px"}
                    >
                        <EditablePreview />
                        <EditableTextarea minW={"400px"} minH={"400px"} />
                    </Editable>
                </Box>
            </Flex>
        </>
    );
}
