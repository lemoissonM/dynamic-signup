import { Box, BreadcrumbItem, HStack, Text } from "@chakra-ui/react";
import React from "react";

type PropTypes = {
    label: string;
    index: number;
    isActive?: boolean;
}

const BreadCrumbItem: React.FC<PropTypes> = ({label, index, isActive}) => {
    return (
        <BreadcrumbItem>
            <HStack spacing={2} mx={2}>
                <Box>
                    <Text px={2} py={0} fontSize="12px" borderRadius="5px" color={isActive ? "white" : ""} bgColor={ isActive ? "teal.400" : "gray.200"}>{index + 1}</Text>
                </Box>
                <Text fontWeight={isActive ? "semibold" : "normal"} fontSize="12px">{label.toUpperCase()}</Text>
            </HStack>
        </BreadcrumbItem>
    )
}

export default BreadCrumbItem;