import React from "react";
import autosize from "autosize";
import { useEffect, useRef } from "react";
import { Textarea } from "@chakra-ui/react";
export default function AutoResizeTextArea(props) {
    const ref = useRef();
    useEffect(() => {
        autosize(ref.current);
        return () => {
            autosize.destroy(ref.current);
        };
    }, []);
    return (<>
        <Textarea 
        ref={ref} 
        s
        {...props}/>
    </>);
}
