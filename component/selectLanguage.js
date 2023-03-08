import { Select, } from "@chakra-ui/react";
export default function selectLanguage({language="Select Language",isdisable=false}) {
    return (
        <Select placeholder={language}  isDisabled={isdisable} >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
        </Select>
    );
}
