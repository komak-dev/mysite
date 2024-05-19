import { NextRequest, NextResponse } from "next/server";
import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = "experimental-edge";

export const config = {
  matcher: ["/admin/:path*"],
};

export function middleware(request: NextRequest) {
  const basicAuth = request.headers.get("authorization");
  const url = request.nextUrl;

  if (basicAuth) {
    const authValue = basicAuth.split(" ")[1];
    const [user, password] = atob(authValue).split(":");

    const requestContext = getRequestContext();

    // const envUser = requestContext.env.AUTH_USER;
    // const envPassword = requestContext.env.AUTH_PASSWORD;

    const envUser = "aiueo";
    const envPassword = "aiueo";
    console.log(envUser, envPassword, user, password);
    if (user === envUser && password === envPassword) {
      return NextResponse.next();
    }
  }

  url.pathname = "/api/auth";

  return NextResponse.rewrite(url);
}
