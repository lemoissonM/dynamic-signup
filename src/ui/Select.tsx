import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Select } from "@chakra-ui/react";
import React from "react";

type PropTypes = {
    label?: string;
    placeholder?: string;
    helperText?: string;
    options?: any[];
    error?: string;
    defaultSelected: string;
}

const SelectInput: React.FC<PropTypes> = ({ label, placeholder, helperText, options, error , defaultSelected}) => {
    return (
        <FormControl isInvalid={!!error}>
            <FormLabel htmlFor="select">{label}</FormLabel>
            <Select id="select" placeholder={placeholder} defaultValue={defaultSelected}>
                {options?.map((option, index) => {
                    return <option key={index} value={option.value}>{option.label}
                    </option>
                }
                )}
            </Select>
            <FormHelperText>{helperText}</FormHelperText>
            <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>
    )
}

export default SelectInput