import React from "react";
import { Checkbox, FormControl, FormErrorMessage, Stack, Text } from "@chakra-ui/react";

type PropTypes = {
    label: string;
    register: any;
    error: any;
    name: string;
    validations: any;
    defaultChecked: boolean;
}

const CheckBoxBase: React.FC<PropTypes> = ({ label, error, register, name, validations, defaultChecked }) => {
    return (
        <FormControl  pt={3} isInvalid={!!error}>
            <Stack>
                <Checkbox defaultChecked={defaultChecked} float="left" colorScheme='teal' name={name} {...register(name, {...validations} )} >
                    <Text fontSize={12}>{label}</Text>
                </Checkbox>
                <FormErrorMessage>
                    {error && error.message}
                </FormErrorMessage>
            </Stack>
        </FormControl>
    )
}

export default CheckBoxBase;