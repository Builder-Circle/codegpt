import { Card, CardHeader, CardBody, CardFooter,Text } from '@chakra-ui/react'
import { Center } from '@chakra-ui/react'
import CopyButton from '@/component/CopyButton'
import CreateTableData from '@/component/CreateTableData'
import { Button } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
export default function Sqlquery({sql="",createtable,clear}) {
    
    return (
        <>
            <Card width={"80%"} boxShadow={"base"} >
                <CardHeader  >
                    <Box fontSize={"3xl"} >
                        <Center>SQL Query</Center>
                    </Box>
                    
                </CardHeader>
                <CardBody>
                    <Text>
                        {sql}
                    </Text>
                </CardBody>
                <CardFooter display={"flex"} justifyContent={"center"} columnGap={"1rem"}  >
                        <CopyButton copyText={sql} size="md" />
                        <CreateTableData clickcreate={()=>{createtable()}} />
                        <Button onClick={()=>{clear()}} >clear</Button>
                </CardFooter>
            </Card>
        </>
    );
}
