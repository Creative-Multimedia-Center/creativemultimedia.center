import { createDirectus, rest, graphql } from '@directus/sdk';

// Client with REST support
export const client = createDirectus('https://db.creativemultimedia.center').with(rest());