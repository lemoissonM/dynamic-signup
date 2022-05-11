import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from "@chakra-ui/react";
import React from "react";

type PropTypes = {
    label?: string;
    placeholder?: string;
    helperText?: string;
    type?: string;
    id?: string;
    register?: any;
    error?: any;
    disabled: boolean;
    isPassword?: boolean;
    validation?: any;
    defaultValue?: string;
}

const TextInput: React.FC<PropTypes> = ({ label, placeholder, helperText, type, id, register, error, disabled, isPassword, validation, defaultValue }) => {
    return (
        <FormControl isInvalid={!!error}>
            <FormLabel htmlFor={id}>{label}</FormLabel>
            <Input
                id={id}
                placeholder={placeholder}
                type={ isPassword ? "password" : type }
                disabled={disabled}
                {...register(id, {...validation})}
                defaultValue={defaultValue}
            />
            <FormHelperText>{helperText}</FormHelperText>
            <FormErrorMessage textAlign="left">{error && error.message}</FormErrorMessage>
        </FormControl>
    )
}

export default TextInput;