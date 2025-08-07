import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};

// Add a custom middleware function to handle redirects
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Redirect root path to dashboard overview
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }
  
  // You can add more redirect rules here if needed
  // For example, redirect other specific paths to dashboard
  
  return NextResponse.next();
}