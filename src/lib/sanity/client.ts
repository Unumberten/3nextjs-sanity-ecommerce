import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "sv3tz2cx",
  dataset: "production",
  apiVersion: "2022-03-07",
  token: process.env.SANITY_PROJECT_TOKEN,
  useCdn: false // `false` if you want to ensure fresh data
});

export default client;
