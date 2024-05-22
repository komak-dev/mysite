import { NextRequest, NextResponse } from "next/server";
import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = "experimental-edge";

export const config = {
  matcher: ["/admin/:path*"],
};

export function middleware(request: NextRequest) {
  // console.log("middleware", request.nextUrl);

  const basicAuth = request.headers.get("authorization");

  if (basicAuth) {
    const authValue = basicAuth.split(" ")[1];
    const [user, password] = atob(authValue).split(":");

    const requestContext = getRequestContext();

    const envUser = requestContext.env.AUTH_USER;
    const envPassword = requestContext.env.AUTH_PASSWORD;

    // console.log(envUser, envPassword, user, password);
    if (user === envUser && password === envPassword) {
      return NextResponse.next();
    }
  }

  return new NextResponse("Unauthorized", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Secure Area"',
    },
  });
}
