import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./lib/session";

// Protecting the pages in NextJS
export default async function middleware(req: NextRequest) {
  const session = await getSession();
  if (!session || !session.user)
    return NextResponse.redirect(
      new URL("/auth/signin", req.nextUrl)
    );

  NextResponse.next();
}
// Witch routes to enforce the middlware to work
export const config = {
  matcher: ["/profile"],
};
