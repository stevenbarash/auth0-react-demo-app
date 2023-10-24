import dotenv from "dotenv";
dotenv.config();

export function getConfig() {
  const audience =
    process.env.AUDIENCE && process.env.AUDIENCE !== "YOUR_API_IDENTIFIER"
      ? process.env.AUDIENCE
      : null;

  return {
    domain: process.env.DOMAIN,
    clientId: process.env.CLIENT_ID,
    ...(audience ? { audience } : null),
  };
}