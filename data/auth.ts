import { getRequestContext } from "@cloudflare/next-on-pages";
import { headers } from "next/headers";

export const checkAuth = () => {
  const basicAuth = headers().get("authorization");

  if (basicAuth) {
    const authValue = basicAuth.split(" ")[1];
    const [user, password] = atob(authValue).split(":");

    const requestContext = getRequestContext();

    const envUser = requestContext.env.AUTH_USER;
    const envPassword = requestContext.env.AUTH_PASSWORD;

    if (user === envUser && password === envPassword) {
      return true;
    }
  }
  return false;
};
