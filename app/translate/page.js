"use client";
import { Image } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
    Editable,
    EditableInput,
    EditableTextarea,
    EditablePreview,
} from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import { useState } from 'react';
import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";
import SelectLanguage from "@/component/selectLanguage";
import Style from "@/app/translate/translate.module.css";
export default function translate() {
    const [file, setfile] = useState(null);
    const [strfile,setStrfile] = useState("");
    function handleFileChange(e) {
        const tmpfile = e.target.files[0];
        if(!tmpfile) {
            setStrfile("Take some code here");
            return;
        }

        setfile(tmpfile);
        fetch("https://httpbin.org/post", {
            method: "POST",
            body: tmpfile,
            // 👇 Set headers manually for single file upload
            headers: {
                "content-type": tmpfile.type,
                "content-length": `${tmpfile.size}`, // 👈 Headers need to be a string
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setStrfile(data.data);
                
            })
            .catch((err) => console.error(err));
    }
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
                    <Box mb={"1rem"}>
                        <SelectLanguage />
                    </Box>
                    <Textarea border={"0"} minW={"400px"} minH={"400px"} mb={"1rem"} value={strfile} placeholder="Take some code here ..." 
                    onChange={(e)=>(setStrfile(e.target.value))} >
                        
                    </Textarea>
                    <input
                        type="file"
                        className={Style.inputfile}
                        onChange={(e) => {
                            handleFileChange(e);
                        }}
                    />
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
                    <Box mb={"1rem"}>
                        <SelectLanguage />
                    </Box>

                    <Textarea border={"0"} minW={"400px"} minH={"400px"} mb={"1rem"} placeholder="Code ..." isReadOnly  >
                        
                    </Textarea>
                    <input
                        type="file"
                        className={Style.inputfile}
                        style={{ visibility: "hidden" }}
                    />
                </Box>
            </Flex>
        </>
    );
}
