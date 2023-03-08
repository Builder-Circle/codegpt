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
import { useState,useRef } from 'react';
import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";
import SelectLanguage from "@/component/selectLanguage";
import Style from "@/app/translate/translate.module.css";
import { Input } from "@chakra-ui/react";

const baselanguage = [ "C", "C++", "C#", "Java", "Python","Javascript","Typescript","Go"];

export default function translate() {
    const [file, setfile] = useState(null);
    const [strfile,setStrfile] = useState("");
    const [language, setLanguage] = useState("detect language");
    const [language2, setLanguage2] = useState("");
    const converButton = useRef(null);
    const [open, setOpen] = useState(false);
    const [openSuggestions, setOpenSuggestions] = useState(false);
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
    function clickconvert() {
        converButton.current.click();
        setOpenSuggestions(false);
    }
    function convert() {

        console.log("convert");
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
                        <Input color={"gray.400"} value={language} isReadOnly textAlign={"center"}  />
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
                        <Button colorScheme="teal" size="lg" ref={converButton} onClick={convert}>
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
                    <Box width={"211px"} >
                        <Box mb={"0.5rem"}>
                            <form action="#clickconvert" onSubmit={(e)=>{
                                e.preventDefault();
                                clickconvert();
                            }}>
                                <Input color={"gray.400"} value={language2}  textAlign={"center"} onChange={(e)=>{
                                    setLanguage2(e.target.value)
                                    setOpenSuggestions(true);
                                    if(e.target.value==="")
                                        setOpenSuggestions(false);
                                    setOpen(true);
                                }} placeholder="Typescript"  />
                            </form>
                        </Box >
                        <Box position={"relative"}>
                            {openSuggestions&&<Box display={"flex"} flexDirection={"column"} border={"1px"} borderColor={"gray.400"} color={"gray.400"} position={"absolute"} zIndex={"1"} width={"100%"} >
                                {language2&& open &&baselanguage.filter((item)=>(item.toLowerCase().includes(language2.toLowerCase()))).map((item)=>(
                                    <Box key={item} onClick={()=>{
                                        setLanguage2(item)
                                        setOpen(false);
                                    }} p={"0.5rem"} 
                                    cursor={"pointer"} _hover={{backgroundColor:"gray.100"}}>{item}
                                    </Box> 
                                ))  }

                            </Box>}
                        </Box>
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
