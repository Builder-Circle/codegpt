import { Button,Text } from "@chakra-ui/react";
import { useState } from "react";
import { useClipboard } from "@chakra-ui/react";
export default function copyButton({ copyText = "" }) {
    const { onCopy, value, setValue, hasCopied } = useClipboard(copyText);
    return (
        <>
            <Button colorScheme="teal" size="lg" onClick={()=>{
                setValue(copyText);
                onCopy();
            }} >
                <Text> {hasCopied ? 'Copied!' : 'Copy'} </Text>
            </Button>
        </>
    );
}
