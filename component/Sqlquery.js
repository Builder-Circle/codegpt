import { Card, CardHeader, CardBody, CardFooter,Text } from '@chakra-ui/react'
import { Center } from '@chakra-ui/react'
import CopyButton from '@/component/CopyButton'
import CreateTableData from '@/component/CreateTableData'
export default function Sqlquery({sql="",createtable}) {
    return (
        <>
            <Card width={"80%"} boxShadow={"base"} >
                <CardHeader  >
                    <Text fontSize={"3xl"}  >
                        <Center>SQL Query</Center>
                    </Text>
                </CardHeader>
                <CardBody>
                    <Text>
                        {sql}
                    </Text>
                </CardBody>
                <CardFooter display={"flex"} justifyContent={"center"} columnGap={"1rem"}  >
                        <CopyButton copyText={sql} size="md" />
                        <CreateTableData clickcreate={()=>{createtable()}} />
                </CardFooter>
            </Card>
        </>
    );
}
