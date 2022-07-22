/* src/components/Breadcrumbs.tsx */
import type { PostTag } from 'types/blog';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

type Props = {
    tag?: PostTag;
};

export const Breadcrumbs = ({ tag }: Props) => {
    return (
        <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' fontSize="xl" fontWeight="bold" />} mb="8">
            <BreadcrumbItem>
                <BreadcrumbLink href='/' fontSize="2xl" fontWeight="bold" >Home</BreadcrumbLink>
            </BreadcrumbItem>
            {tag && (
                <BreadcrumbItem>
                    <BreadcrumbLink href={`/tags/${tag.id}/page/1`} fontSize="2xl" fontWeight="bold">{tag.name}</BreadcrumbLink>
                </BreadcrumbItem>
            )}
        </Breadcrumb>
    );
};