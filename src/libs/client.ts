/* src/libs/client.ts */
import { createClient } from 'microcms-js-sdk'; //ES6

export const client = createClient({
    serviceDomain: process.env.SERVICE_DOMAIN || '',
    apiKey: process.env.API_KEY || '',
});