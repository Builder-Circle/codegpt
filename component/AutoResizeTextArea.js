import React from "react";
import autosize from "autosize";
import { useEffect, useRef } from "react";
import { Textarea } from "@chakra-ui/react";
export default function AutoResizeTextArea(props) {
    const ref = useRef();

    useEffect(() => {
        autosize(ref.current);
        const el = ref.current;

        return () => {
            autosize.destroy(el);
        };
    }, []);
    return (<>
        <Textarea 
        ref={ref} 
        
        {...props}/>
    </>);
}
