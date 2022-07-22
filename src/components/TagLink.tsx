/* src/components/TagLink.tsx */
import type { PostTag } from "types/blog";
import NextLink from "next/link";
import { FC } from "react";

import {
    Link,
    Tag,
    TagLabel
} from "@chakra-ui/react";


export const TagLink: FC<{ tag: PostTag }> = ({ tag }) => {
    return (
        <NextLink href={`/tags/${tag.id}/page/1`} passHref>
            <Link>
                <Tag variant='subtle' colorScheme='cyan'>
                    <TagLabel fontSize="md">{tag.name}</TagLabel>
                </Tag>
            </Link>
        </NextLink>
    );
};