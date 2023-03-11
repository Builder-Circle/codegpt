import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Box,
  Text,
  StackDivider,
} from "@chakra-ui/react";
import { Spacer } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { EditIcon } from "@chakra-ui/icons";
import { Textarea } from "@chakra-ui/react";
import AutoResizeTextArea from "./AutoResizeTextArea";
import { Button } from "@chakra-ui/react";
import React from "react";
import { Input } from "@chakra-ui/react";


export default function Datatable({table,del,trickEdit}) {
    const [isEdit,setIsEdit] = React.useState(false);
    const [newTableName,setNewTableName] = React.useState(table.tableName);
    const [newPk,setNewPk] = React.useState(table.primarykey);
    const [newFk,setNewFk] = React.useState(table.foreignkey);
    const [newAttributes,setNewAttributes] = React.useState(table.attributes);  
    function saveEdit(){
        setIsEdit(false);
        const newtable = {
            tableName: newTableName,
            primarykey: newPk,
            foreignkey: newFk,
            attributes: newAttributes,
        };
        let newalltable = JSON.parse(localStorage.getItem("alltable"));
        newalltable = newalltable.map((table)=>{
            if(table.tableName === tableName){
                return newtable;
            }
            return table;
        });
        localStorage.setItem("alltable", JSON.stringify(newalltable));
        trickEdit();
    }
    return (
        <>
            <Card width={"100%"} >
                
                <CardHeader display={"flex"} alignItems={"center"}>
                    {/* <div>{JSON.stringify(table)}</div> */}
                    
                    <Input type="text" border={"none"} size={"md"} 
                    fontWeight={"bold"} fontSize={"xl"} isReadOnly={!isEdit} ps={"0"}
                    value={newTableName } onChange={(e)=>{setNewTableName(e.target.value)} }
                     ></Input>
                    <Spacer/>
                    { isEdit && 
                        <Button colorScheme='teal' size='xs' me={"0.5rem"} onClick={()=>{saveEdit()}}>
                            Save
                        </Button>

                    }
                    {
                        isEdit &&
                        <Button colorScheme='red' size='xs' me={"1rem"} onClick={()=>{setIsEdit(false)}}>
                            Cancel
                        </Button>
                    }
        
                    <EditIcon fontSize={"2xl"} cursor={"pointer"} me={"1rem"} onClick={()=>{setIsEdit(true)}}/>
                    <DeleteIcon fontSize={"2xl"} cursor={"pointer"} onClick={()=>{
                        const obj = {
                            tableName: newTableName,
                            primarykey: newPk,
                            foreignkey: newFk,
                            attributes: newAttributes,
                        };
                        del(obj)
                        }} display={isEdit? "none" : ""} />
                    
                </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Primary key
              </Heading>
              <AutoResizeTextArea
                minH={"1rem"}
                fontSize={"sm"}
                isReadOnly={!isEdit}
                border={"none"}
                ps={"0"}
                value={newPk}
                onChange={(e) => {
                  setNewPk(e.target.value);
                }}
              />
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Foreign key
              </Heading>
              <AutoResizeTextArea
                minH={"1rem"}
                fontSize={"sm"}
                isReadOnly={!isEdit}
                border={"none"}
                ps={"0"}
                value={newFk}
                onChange={(e) => {
                  setNewFk(e.target.value);
                }}
              />
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Attributes
              </Heading>
              <AutoResizeTextArea
                minH={"1rem"}
                fontSize={"sm"}
                isReadOnly={!isEdit}
                border={"none"}
                ps={"0"}
                value={newAttributes}
                onChange={(e) => {
                  setNewAttributes(e.target.value);
                }}
              />
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}
