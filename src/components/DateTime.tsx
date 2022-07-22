import { FC } from "react";
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

import { Text, Box } from "@chakra-ui/react";


type Props = {
    datetime: string;
}

export const DateTime: FC<Props> = ({ datetime }) => {
    dayjs.extend(utc)
    dayjs.extend(timezone);
    const formatDate = dayjs.utc(datetime).tz('Asia/Tokyo').format('YYYY-MM-DD');
    return (
        <Box mt="4">
            <Text as="time" dateTime={formatDate} fontSize="xl" color="gray.500">
                {formatDate}
            </Text>
        </Box>
    );
};