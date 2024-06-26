import { jwtDecode } from "jwt-decode";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const AuthRoutes = ["/login", "/register"];

const roleBasedPrivateRoutes = {
  user: [/^\/profile(\/[^\/]+)?$/],
  admin: [
    /^\/profile(\/[^\/]+)?$/,
    /^\/dashboard(\/[^\/]+)?$/,  
  ],
};

type Role = keyof typeof roleBasedPrivateRoutes;

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = request.cookies.get("mui-token")?.value ?? null;

  if (!accessToken) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  let decodedData = null;
  try {
    decodedData = jwtDecode(accessToken) as any;
  } catch (error) {
    console.error("Error decoding token:", error);
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const role = decodedData?.role;
  if (role && roleBasedPrivateRoutes[role as Role]) {
    const routes = roleBasedPrivateRoutes[role as Role];
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }
  
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/login", "/register", "/profile/:page*", "/dashboard/:page*"],
};
