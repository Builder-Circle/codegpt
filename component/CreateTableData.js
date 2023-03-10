
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import { Button } from "@chakra-ui/button";
import { AddIcon } from "@chakra-ui/icons";
import {
    Box,
    FormLabel,
    Input,   
    Stack,
} from "@chakra-ui/react";
import React from "react";
import AutoResizeTextArea from "./AutoResizeTextArea";
import { useEffect,useState } from "react";
export default function CreateTableData({clickcreate}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [tableName, setTableName] = useState("");
    const [primarykey, setPrimarykey] = useState("");
    const [foreignkey, setForeignkey] = useState("");
    const [attributes, setAttributes] = useState("");
    const [ablecreate, setAblecreate] = React.useState(false);
    const [alltable, setAlltable] = useState([]);
    
    useEffect(() => {
        if(localStorage.getItem("alltable") === null){
            localStorage.setItem("alltable",JSON.stringify([]));
        }
        setAlltable(JSON.parse(localStorage.getItem("alltable")));
    }, []);
    useEffect(() => {
        checkAblecreate();

    }, [tableName, primarykey, foreignkey, attributes]);


    useEffect(() => {
        setTableName("");
        setPrimarykey("");
        setForeignkey("");
        setAttributes("");

    }
    , [isOpen]);

    function createNewtable() {
        const newtable = {
            tableName: tableName,
            primarykey: primarykey,
            foreignkey: foreignkey,
            attributes: attributes,
        };
        const newalltable = [...alltable, newtable];
        localStorage.setItem("alltable", JSON.stringify(newalltable));
        setAlltable(newalltable);
        clickcreate();
        

        onClose();
    }

    function checkAblecreate() {
        if (
            tableName !== "" &&
            primarykey!== "" &&
            foreignkey !== "" &&
            attributes !== ""
            
        ) {
            setAblecreate(true);
        } else {
            setAblecreate(false);
        }
    }
    return (
        <>
            <Button leftIcon={<AddIcon />} colorScheme="teal" onClick={onOpen}  >
                Create Table Data
            </Button>
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                size={"md"}

            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth="1px">
                        Create a new table
                    </DrawerHeader>

                    <DrawerBody>
                        <Stack spacing="24px">
                            <Box>
                                <FormLabel htmlFor="tableName">Table Name</FormLabel>
                                <Input
                                    
                                    id="tableName"
                                    placeholder="Please enter table name"
                                    onChange={(e)=> {
                                        setTableName(e.target.value);
                                        
                                    }}
                                    
                                    value={tableName}
                                />
                            </Box>

                            <Box>
                                <FormLabel htmlFor="primarykey">
                                    Primary key
                                </FormLabel>
                                <Input 
                                    placeholder="user_id"
                                    id="primarykey"
                                    onChange={(e)=> {
                                        setPrimarykey(e.target.value);
                                    }}
                                    value={primarykey}
                                    
                                />
                            </Box>
                            <Box>
                                <FormLabel htmlFor="foreignkey">
                                    Foreign key
                                </FormLabel>
                                <AutoResizeTextArea 
                                placeholder={"Example: product_id,order_id (if not, enter - ))"
                                }
                                id={"foreignkey"}
                                minH={"1rem"}
                                overflow={"hidden"}
                                resize={"none"}
                                onChange={(e)=> {
                                    setForeignkey(e.target.value);
                                }}
                                value={foreignkey}
                                
                                />
                            </Box>
                            <Box>
                                <FormLabel htmlFor="desc">
                                    Attribute
                                </FormLabel>
                                <AutoResizeTextArea 
                                placeholder={"Example: name,age,phone"
                                }
                                id={"foreignkey"} 
                                minH={"15rem"}
                                overflow={"hidden"}
                                resize={"none"}
                                
                                onChange={(e)=> { 
                                    setAttributes(e.target.value);
                                }}
                                value={attributes}
                                
                                
                                />
                            </Box>
                        </Stack>
                    </DrawerBody>

                    <DrawerFooter borderTopWidth="1px">
                        <Button variant="outline" mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme="teal" onClick={createNewtable} isDisabled={ablecreate ? false : true} >Create</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
}
