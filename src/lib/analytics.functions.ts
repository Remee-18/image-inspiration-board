import { createServerFn } from "@tanstack/react-start";

// The GA4 measurement ID is public by design; it is stored as a project secret and handed to the browser here.
export const getAnalyticsId = createServerFn({ method: "GET" }).handler(() => {
  const id = process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID?.trim();
  return id && /^G-[A-Z0-9]+$/i.test(id) ? id : null;
});
