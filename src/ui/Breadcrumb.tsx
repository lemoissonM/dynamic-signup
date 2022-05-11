import { Box, Breadcrumb } from "@chakra-ui/react";
import React from "react";
import BreadCrumbItem from "./BreadCrumItem";

type PropTypes = {
    items: any[],
    activeIndex: number,
}

const BreadCrumb: React.FC<PropTypes> = ({items, activeIndex}) => {
    return (
        <>
            <Breadcrumb >
                {items.map((_item, index) => {
                    return <BreadCrumbItem key={index} label={`step ${index + 1}`} index={index} isActive={index === activeIndex} />
                })}
            </Breadcrumb>
            <Box height="1px" width="100%" bgColor="gray.200" />
        </>
    )
}

export default BreadCrumb;