import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: 'g63lby0n',
    dataset: 'production',
    apiVersion: '2024-02-24',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);