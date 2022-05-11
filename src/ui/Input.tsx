import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from "@chakra-ui/react";
import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

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
    const [showPassword, setShowPassword] = React.useState(false);
    return (
        <FormControl isInvalid={!!error}>
            <FormLabel htmlFor={id}>{label}</FormLabel>
            <Input
                id={id}
                placeholder={placeholder}
                type={ showPassword ? 'text' : isPassword ? "password" : type }
                disabled={disabled}
                {...register(id, {...validation})}
                defaultValue={defaultValue}
            />
            { isPassword && !showPassword && <FaEye onClick={() => setShowPassword(!showPassword)} style={{position: 'absolute', right: 20, top: 45, cursor: 'pointer'}}/> }
            { isPassword && showPassword && <FaEyeSlash onClick={() => setShowPassword(!showPassword)} style={{position: 'absolute', right: 20, top: 45, cursor: 'pointer'}}/> }
            <FormHelperText>{helperText}</FormHelperText>
            <FormErrorMessage textAlign="left">{error && error.message}</FormErrorMessage>
        </FormControl>
    )
}

export default TextInput;