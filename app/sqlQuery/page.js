"use client";
import { Container, Flex } from "@chakra-ui/react";
import { useState, useEffect,useRef } from "react";
import CopyButton from "@/component/CopyButton";
import CreateTableData from "@/component/CreateTableData";
import { Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import Sqlquery from "@/component/Sqlquery";
import { Input } from "@chakra-ui/react";
import AutoResizeTextArea from "@/component/AutoResizeTextArea";
import Datatable from "@/component/Datatable";
import { CircularProgress } from "@chakra-ui/react";

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import axios from "axios";
export default function SqlQuery() {
    const submit_q = useRef(null);
    const [alltable, setAlltable] = useState([]);
    const [createtricker,setCreatetricker] = useState(false);
    const [dataRequire, setDataRequire] = useState("");
    const [sql, setSql] = useState("");
    const [loader, setLoader] = useState(false);
    const [editTricker, setEditTricker] = useState(false);
    useEffect(() => {
        if(localStorage.getItem("alltable") === null){
            localStorage.setItem("alltable",JSON.stringify([]));

        }
        setAlltable(JSON.parse(localStorage.getItem("alltable")));
    }, []);
    useEffect(() => {
        if(localStorage.getItem("alltable") === null){
            localStorage.setItem("alltable",JSON.stringify([]));
        
        }
        setAlltable(JSON.parse(localStorage.getItem("alltable")));
    }, [createtricker]);
    useEffect(() => {
        if(localStorage.getItem("alltable") === null){
            localStorage.setItem("alltable",JSON.stringify([]));
        }
        setAlltable(JSON.parse(localStorage.getItem("alltable")));
    }, [editTricker]);

    
    function clicksubmit(){
        setLoader(true);
       axios.post("/api/sqlquery",{
              dataRequire: dataRequire,
                alltable: alltable,
            })
            .then((res)=>{
                setSql(res.data.message);
                setLoader(false);
            })
            .catch((err)=>{
                console.log(err);
            });

    }
    function deleteTable(tableName){
        let newalltable = [...alltable];
        newalltable = newalltable.filter((table)=>{return table.tableName !== tableName});
        localStorage.setItem("alltable",JSON.stringify(newalltable));
        setAlltable(newalltable);
    }

    return (
        <>
            <Container maxW="60vw" centerContent mt={"5rem"}>
                <Box
                    width={"100%"}
                    display={"flex"}
                    justifyContent={"center"}
                    mb={"2rem"}
                >
                    <Sqlquery sql={sql} createtable={()=>{setCreatetricker(!createtricker)} }
                    clear={()=>{setDataRequire("");setSql("");}}
                     />
                </Box>
                <FormControl width={"60%"}  >
                    <FormLabel mb={"1rem"} htmlFor="dataRequire" >
                        <Center>
                            Data required
                        </Center>
                    </FormLabel>
                    
                        <AutoResizeTextArea 
                            placeholder={" what is you question?"
                        }
                        id={"dataRequire"}
                        minH={"1rem"}
                        overflow={"hidden"}
                        resize={"none"}

                        value={dataRequire}
                        onChange={(e)=>{
                            setDataRequire(e.target.value);
                        }
                        }
                        />
        
                    <Box my={"1rem"}  display="flex" justifyContent={"center"} gap={"1rem"}>
                        { loader && <CircularProgress isIndeterminate color='green.300' fontSize={"1rem"} />}
                        <Button ref={submit_q} colorScheme="teal" onClick={clicksubmit}>
                            Submit
                        </Button>
                    </Box>
                </FormControl>
                <Box width={"60%"} display={"flex"} flexDirection={"column"} gap={"1rem"} >
                    {
                        alltable.map((table,index)=>{
                            return <Datatable key={index} tableName={table.tableName} pk={table.pk} fk={table.fk} attributes={table.attributes}
                            del={(tablename)=>{deleteTable(tablename)}} trickEdit={()=>{setEditTricker(!editTricker)}} />
                        }
                        )
                    }

                </Box>
            </Container>
        </>
    );
}
