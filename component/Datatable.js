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
import {DeleteIcon} from "@chakra-ui/icons";
export default function Datatable({tableName="Customer",pk="customer_id",fk="order_id",attributes="category,price,quantity",del}) {
    return (
        <>
            <Card width={"100%"} >
                <CardHeader display={"flex"}>
                    <Heading size="md">{tableName}</Heading>
                    <Spacer/>
                    <DeleteIcon fontSize={"2xl"} cursor={"pointer"} onClick={()=>{del(tableName)}}/>

                </CardHeader>

                <CardBody>
                    <Stack divider={<StackDivider />} spacing="4">
                        <Box>
                            <Heading size="xs" textTransform="uppercase">
                                Primary key
                            </Heading>
                            <Text pt="2" fontSize="sm">
                                {pk}
                            </Text>
                        </Box>
                        <Box>
                            <Heading size="xs" textTransform="uppercase">
                                Foreign key
                            </Heading>
                            <Text pt="2" fontSize="sm">
                                {fk}
                            </Text>
                        </Box>
                        <Box>
                            <Heading size="xs" textTransform="uppercase">
                                Attributes
                            </Heading>
                            <Text pt="2" fontSize="sm">
                                {attributes}
                            </Text>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>
        </>
    );
}
