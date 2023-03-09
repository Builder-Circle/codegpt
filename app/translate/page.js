"use client";

import { Textarea } from "@chakra-ui/react";
import { useState,useRef } from 'react';
import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";
import Style from "@/app/translate/translate.module.css";
import { Input } from "@chakra-ui/react";
import CopyButton from "@/component/CopyButton";
import axios from "axios";
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
const baselanguage = [ "C", "C++", "C#", "Java", "Python","Javascript","Typescript","Go"];

export default function Translate() {
    const [file, setfile] = useState(null);
    const [strfile,setStrfile] = useState("");
    const [language, setLanguage] = useState("detect language");
    const [language2, setLanguage2] = useState("");
    const converButton = useRef(null);
    const [open, setOpen] = useState(false);
    const [openSuggestions, setOpenSuggestions] = useState(false);
    const [convertCode, setConvertCode] = useState("");
    const [loader, setLoader] = useState(false);
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
        setLoader(true);
        if(language2==="")
            return;
        axios.post("/api/convert", {
            content: strfile,
            language: language2,
        })
        .then((res) => {
            setLoader(false);
            setConvertCode(res.data.message);
        })
        .catch((err) => console.error(err));
    }

    return (
        <>
            <Flex mt={{ base: "4rem"}} rowGap={{base:"1rem",md:"0rem"}} 
                flexDirection={{base:"row"}}
                height={"90vh"}
                alignItems={"center"}
                justifyContent={"space-evenly"}
                flexWrap={"wrap"}
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
                    onChange={(e)=>{
                        setStrfile(e.target.value)
                        setLoader(false);
                    }} >
                        
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
                        <Button colorScheme="teal" size="lg" ref={converButton} onClick={()=>{
                            convert()
                            setOpenSuggestions(false)
                        }}>
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
                    <Box width={"211px"} mb={"1rem"} >
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
                            {openSuggestions &&<Box display={"flex"} flexDirection={"column"} border={"1px"} borderColor={"gray.400"} color={"gray.400"} position={"absolute"} zIndex={"1"} width={"100%"} >
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

                    <Textarea border={"0"} minW={"400px"} minH={"400px"} mb={"1rem"} placeholder="Code ..." 
                    value={convertCode}  >
                    </Textarea>
                    <Box display={"flex"} justifyContent={"center"} width={"100%"} gap={"20px"} >
                        { loader && <CircularProgress isIndeterminate color='green.300' />}
                        <CopyButton copyText={convertCode} />
                    </Box>

                    {/* <input
                        type="file"
                        className={Style.inputfile}
                        style={{ visibility: "hidden" }}
                    /> */}
                </Box>
            </Flex>
        </>
    );
}
